import AuthFormLayout from "@/Components/Auth/AuthFormLayout";
import InputField from "@/Components/Auth/InputField";
import AuthButton from "@/Components/Auth/AuthButton";
import { Head, Link, useForm } from "@inertiajs/react";
import google from "../../../../public/images/auth/google.svg";
import { useState } from "react";

export function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export function validatePasswords(password, passwordConfirmation) {
    return password === passwordConfirmation;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [emailTakenError, setEmailTakenError] = useState(false);
    const [emailFormatError, setEmailFormatError] = useState(false);
    const [passwordRequirementError, setPasswordRequirementError] = useState(false);
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        setEmailTakenError(false);
        setEmailFormatError(false);
        setPasswordRequirementError(false);
        setPasswordMismatchError(false);

        if (!validateEmail(data.email)) {
            setEmailFormatError(true);
            return;
        }

        if (!validatePasswords(data.password, data.password_confirmation)) {
            setPasswordMismatchError(true);
            return;
        }

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
            onError: (err) => {
                if (err.email) {
                    if (err.email.includes('already been taken')) {
                        setEmailTakenError(true);
                    } else if (err.email.includes('format')) {
                        setEmailFormatError(true);
                    }
                }
                if (err.password) {
                    setPasswordRequirementError(true);
                }
            }
        });
    };

    return (
        <AuthFormLayout>
            <Head title="Register" />
            {(emailTakenError || emailFormatError || passwordMismatchError || passwordRequirementError) && (
                <div className="mb-4">
                    {emailTakenError && <p className="text-red-600 text-sm">This email is already in use.</p>}
                    {emailFormatError && <p className="text-red-600 text-sm">Invalid email format.</p>}
                    {passwordRequirementError && <p className="text-red-600 text-sm">Password does not meet the requirements.</p>}
                    {passwordMismatchError && <p className="text-red-600 text-sm">Passwords do not match.</p>}
                </div>
            )}

            <form onSubmit={submit}>
                <InputField
                    type="text"
                    placeholder="Username"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    hasError={errors.name}
                    required
                />
                <InputField
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => {
                        setData('email', e.target.value);
                        setEmailTakenError(false);
                        setEmailFormatError(false);
                    }}
                    hasError={errors.email || emailTakenError || emailFormatError}
                    required
                />

                <InputField
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => {
                        setData('password', e.target.value);
                        setPasswordRequirementError(false);
                    }}
                    hasError={passwordRequirementError || passwordMismatchError}
                    required
                />

                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    value={data.password_confirmation}
                    onChange={(e) => {
                        setData('password_confirmation', e.target.value);
                        setPasswordMismatchError(false);
                    }}
                    hasError={passwordMismatchError}
                    required
                />

                <AuthButton text="Sign Up" isPrimary={true} disabled={processing} />
                <AuthButton
                    text="Sign Up with Google"
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
                Already have an account? 
                <Link href={route('login')} className="text-primary hover:underline"> Sign In</Link>
            </p>
        </AuthFormLayout>
    );
}
