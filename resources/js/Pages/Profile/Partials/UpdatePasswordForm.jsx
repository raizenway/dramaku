import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Update Password</h2>
                <p className="mt-1 text-base text-body-color">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex flex-wrap">
                    {/* Current Password Field */}
                    <div className="mx-4 my-2 w-full">
                        <input
                            id="current_password"
                            ref={currentPasswordInput}
                            placeholder="Current Password"
                            type="password"
                            className="block w-full text-base border border-gray-400 rounded-lg p-2"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            autoComplete="current-password"
                        />
                        <InputError message={errors.current_password} className="mt-2" />
                    </div>

                    {/* New Password Field */}
                    <div className="mx-4 my-2 w-full">
                        <input
                            id="password"
                            ref={passwordInput}
                            placeholder="New Password"
                            type="password"
                            className="block w-full text-base border border-gray-400 rounded-lg p-2"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoComplete="new-password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mx-4 my-2 w-full">
                        <input
                            id="password_confirmation"
                            placeholder="Confirm Password"
                            type="password"
                            className="block w-full text-base border border-gray-400 rounded-lg p-2"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            autoComplete="new-password"
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    {/* Forgot Password Link */}
                    <div className="mx-4 my-2 w-full">
                        <Link
                            href={route('password.request')}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <div className="mx-4 my-2 w-full">
                        <button
                            type="submit"
                            className="text-white inline-flex items-center justify-center py-2 text-base font-medium rounded-md bg-primary px-7 hover:bg-blue-dark"
                            disabled={processing}
                        >
                            Save
                        </button>
                        {recentlySuccessful && (
                            <p className="text-sm text-gray-600 ml-4">Saved.</p>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
}
