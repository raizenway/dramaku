import AuthFormLayout from "@/Components/Auth/AuthFormLayout";
import InputField from "@/Components/Auth/InputField";
import AuthButton from "@/Components/Auth/AuthButton";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";
import google from "../../../../public/images/auth/google.svg";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthFormLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <InputField
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
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
                    {canResetPassword && (
                        <Link href={route('password.request')} className="text-base text-body-secondary hover:text-primary">
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <AuthButton text="Sign In" isPrimary={true} disabled={processing} />
                <AuthButton text="Sign In with Google" icon={google} isPrimary={false} onClick={() => { /* Handle Google Sign In */ }} />
            </form>
            <p className="text-base text-body-secondary mt-4">
                Do not have an account? 
                <Link href="/register" className="text-primary hover:underline"> Sign Up</Link>
            </p>
        </AuthFormLayout>
    );
}
