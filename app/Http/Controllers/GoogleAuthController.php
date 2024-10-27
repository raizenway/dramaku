<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback(Request $request)
    {
        try {
            if ($request->has('error')) {
                return redirect('/login')->with('error', 'Google login was cancelled.');
            }

            $google_user = Socialite::driver('google')->user();
            $user = User::where('googleAuth', $google_user->getId())->first();

            if (!$user) {
                $user = User::where('email', $google_user->getEmail())->first();

                if ($user) {
                    $user->update([
                        'googleAuth' => $google_user->getId(),
                    ]);
                } else {
                    $user = User::create([
                        'name' => $google_user->getName(),
                        'email' => $google_user->getEmail(),
                        'googleAuth' => $google_user->getId(),
                        'password' => Hash::make(uniqid()),
                    ]);
                }
            }

            Auth::login($user);
            return redirect()->intended('/');
        
        } catch (\Throwable $th) {
            dd('something went wrong! ' . $th->getMessage());
            return redirect('/login')->with('error', 'Something went wrong during Google login.');
        }
    }   
}