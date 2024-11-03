import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="text-base text-body-color">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex flex-wrap">
                    <div className="mx-4 my-2 w-full">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="block w-full text-base border border-gray-400 rounded-lg p-2"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="mx-4 my-2 w-full">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="block w-full text-base border border-gray-400 rounded-lg p-2"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div className="mx-4 my-2 w-full">
                            <p className="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>
                            {status === 'verification-link-sent' && (
                                <div className="mt-2 font-medium text-sm text-green-600">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}

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
