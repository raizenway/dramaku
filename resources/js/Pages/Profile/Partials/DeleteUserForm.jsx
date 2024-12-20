import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/ConfirmationModal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const { data, setData, delete: destroy, processing, reset, errors, clearErrors } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
                <p className="text-base text-body-color">
                    Once your account is deleted, all of its resources and data will be permanently deleted.
                    Before deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <button
                onClick={confirmUserDeletion}
                className="text-white inline-flex items-center justify-center py-2 text-base font-medium rounded-md bg-red-600 px-7 hover:bg-red-800"
            >
                Delete Account
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="text-base text-body-color">
                        Once your account is deleted, all of its resources and data will be permanently deleted. 
                        Please enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            placeholder="Password"
                            className="block w-3/4 text-base border border-gray-400 rounded-lg p-2"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="inline-flex items-center justify-center py-2 text-base font-medium rounded-md bg-gray-600 text-white px-4 hover:bg-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex items-center justify-center py-2 text-base font-medium rounded-md bg-red-600 text-white px-7 hover:bg-red-800"
                            disabled={processing}
                        >
                            Delete Account
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
