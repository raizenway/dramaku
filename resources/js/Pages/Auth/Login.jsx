import React, { useEffect, useState } from "react";
import AuthFormLayout from "@/Components/Auth/AuthFormLayout";
import InputField from "@/Components/Auth/InputField";
import AuthButton from "@/Components/Auth/AuthButton";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";
import google from "../../../../public/images/auth/google.svg";

export default function Login({ status, canResetPassword, error }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [loginError, setLoginError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [showSuspendedModal, setShowSuspendedModal] = useState(false);

    useEffect(() => {
        if (error && error.includes('suspended')) {
            setShowSuspendedModal(true);
        }
    }, [error]);

    const submit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(data.email)) {
            setEmailError('Invalid email format');
            setLoginError(false);
            return;
        }

        setEmailError(false);

        post(route('login'), {
            onFinish: () => reset('password'),
            onError: (errors) => {
                if (errors.email && errors.email.includes('suspended')) {
                    setShowSuspendedModal(true);
                } else {
                    setLoginError(true);
                    setEmailError(false);
                }
            },
        });
    };

    const handleFocus = () => {
        setLoginError(false);
        setEmailError(false);
    };

    return (
        <AuthFormLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            {error && <div className="mb-4 font-medium text-sm text-red-600">{error}</div>}
            {loginError && !error && <div className="mb-4 font-medium text-sm text-red-600">Username or password is incorrect</div>}
            {emailError && <div className="mb-4 font-medium text-sm text-red-600">{emailError}</div>}

            <form onSubmit={submit}>
                <InputField
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    onFocus={handleFocus}
                    hasError={emailError || loginError}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    onFocus={handleFocus}
                    hasError={loginError}
                    required
                />
                <div className="flex justify-between items-center my-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-base text-body-secondary">Remember me</span>
                    </label>
                </div>
                <AuthButton text="Sign In" isPrimary={true} disabled={processing} />
                <AuthButton
                    text="Sign In with Google"
                    icon={google}
                    isPrimary={false}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = route('google.auth');
                    }}
                    type="button"
                />
            </form>
            <p className="text-base text-body-secondary mt-4">
                Do not have an account? 
                <Link href="/register" className="text-primary hover:underline"> Sign Up</Link>
            </p>

            {showSuspendedModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-4 rounded shadow-lg z-10">
                        <h2 className="text-lg font-bold">Account Suspended</h2>
                        <p className="text-base">Your account has been suspended. Please contact support for more information.</p>
                        <button onClick={() => setShowSuspendedModal(false)} className="mt-4 btn text-primary hover:text-blue-dark">Close</button>
                    </div>
                </div>
            )}
        </AuthFormLayout>
    );
}