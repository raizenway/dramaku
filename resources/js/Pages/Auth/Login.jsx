import AuthFormLayout from "@/Components/Auth/AuthFormLayout";
import InputField from "@/Components/Auth/InputField";
import AuthButton from "@/Components/Auth/AuthButton";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";
import google from "../../../../public/images/auth/google.svg";
import { useState } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [loginError, setLoginError] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
            onError: () => setLoginError(true),  // Set login error to true when login fails
        });
    };

    // Function to reset login error when input is focused
    const handleFocus = () => {
        setLoginError(false);  // Reset login error when the user focuses on the input
    };

    return (
        <AuthFormLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            {loginError && <div className="mb-4 font-medium text-sm text-red-600">Username or password is incorrect</div>}

            <form onSubmit={submit}>
                <InputField
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    onFocus={handleFocus}  // Call handleFocus when input is clicked
                    hasError={loginError}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    onFocus={handleFocus}  // Call handleFocus when input is clicked
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
                    onClick={() => window.location.href = route('google.auth')}
                />
            </form>
            <p className="text-base text-body-secondary mt-4">
                Do not have an account? 
                <Link href="/register" className="text-primary hover:underline"> Sign Up</Link>
            </p>
        </AuthFormLayout>
    );
}
