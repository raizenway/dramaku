<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('created_at', 'asc')->get();
    
        return Inertia::render('CMS/CMSUsers', [
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'username' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role,
                ];
            }),
        ]);
    }     

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt('default_password'),
        ]);

        return redirect()->route('cms.users')->with('success', 'User created successfully.');
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
        ]);

        $user = User::findOrFail($id);
        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        return redirect()->route('cms.users')->with('success', 'User updated successfully.');
    }
    public function suspend(User $user)
    {
        $user->role = $user->role === 'suspended' ? 'user' : 'suspended';
        $user->save();
    
        return redirect()->route('cms.users')->with('status', 'User status updated successfully');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('cms.users')->with('success', 'User deleted successfully.');
    }
}
