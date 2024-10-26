import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <>
            <Head title="Profile" />
            <Navbar />
            <section className="py-24 md:py-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-gray-100 p-6 rounded-lg shadow">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg shadow">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
