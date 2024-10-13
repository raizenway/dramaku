import AuthFormLayout from "@/Components/Auth/AuthFormLayout";
import InputField from "@/Components/Auth/InputField";
import AuthButton from "@/Components/Auth/AuthButton";
import { Head, Link, useForm } from "@inertiajs/react";
import google from "../../../../public/images/auth/google.svg"; 

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthFormLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <InputField
                    type="text"
                    placeholder="Username"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                <InputField
                    type="email"
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
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    required
                />
                <AuthButton text="Sign Up" isPrimary={true} disabled={processing} />
                <AuthButton text="Sign Up with Google" icon={google} isPrimary={false} onClick={() => { /* Handle Google Sign Up */ }} />
            </form>
            <p className="mb-4 text-base text-body-secondary">
                By creating an account you agree with our 
                <Link href="#" className="text-primary hover:underline"> Privacy</Link> and 
                <Link href="#" className="text-primary hover:underline"> Policy</Link>.
            </p>
            <p className="text-base text-body-secondary">
                Already have an account? 
                <Link href="/login" className="text-primary hover:underline"> Sign In</Link>
            </p>
        </AuthFormLayout>
    );
}
