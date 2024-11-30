import { validateEmail, handleLoginError, submitForm, handleSubmit, handleFocus } from './Login';
import { router as Inertia } from '@inertiajs/react';

jest.mock('@inertiajs/react', () => ({
    ...jest.requireActual('@inertiajs/react'),
    route: jest.fn(() => '/login'),
    router: {
        post: jest.fn(),
    },
}));

describe('Login functions', () => {
    describe('validateEmail', () => {
        it('should return true for valid email', () => {
            expect(validateEmail('test@example.com')).toBe(true);
        });

        it('should return false for invalid email', () => {
            expect(validateEmail('invalid-email')).toBe(false);
        });
    });

    describe('handleLoginError', () => {
        it('should set showSuspendedModal to true if error includes "suspended"', () => {
            const setShowSuspendedModal = jest.fn();
            const setLoginError = jest.fn();
            handleLoginError('account suspended', setShowSuspendedModal, setLoginError);
            expect(setShowSuspendedModal).toHaveBeenCalledWith(true);
            expect(setLoginError).not.toHaveBeenCalled();
        });

        it('should set loginError to true if error does not include "suspended"', () => {
            const setShowSuspendedModal = jest.fn();
            const setLoginError = jest.fn();
            handleLoginError('some other error', setShowSuspendedModal, setLoginError);
            expect(setShowSuspendedModal).not.toHaveBeenCalled();
            expect(setLoginError).toHaveBeenCalledWith(true);
        });
    });

    describe('submitForm', () => {
        it('should return false and set emailError if email is invalid', () => {
            const data = { email: 'invalid-email' };
            const post = jest.fn();
            const reset = jest.fn();
            const setEmailError = jest.fn();
            const setLoginError = jest.fn();
            const setShowSuspendedModal = jest.fn();

            const result = submitForm(data, post, reset, setEmailError, setLoginError, setShowSuspendedModal);

            expect(result).toBe(false);
            expect(setEmailError).toHaveBeenCalledWith('Invalid email format');
            expect(setLoginError).toHaveBeenCalledWith(false);
        });

        it('should call post and return true if email is valid', () => {
            const data = { email: 'test@example.com' };
            const post = jest.fn();
            const reset = jest.fn();
            const setEmailError = jest.fn();
            const setLoginError = jest.fn();
            const setShowSuspendedModal = jest.fn();

            const result = submitForm(data, post, reset, setEmailError, setLoginError, setShowSuspendedModal);

            expect(result).toBe(true);
            expect(post).toHaveBeenCalledWith('/login', expect.objectContaining({
                onFinish: expect.any(Function),
                onError: expect.any(Function),
            }));
            expect(setEmailError).toHaveBeenCalledWith(false);
        });
    });

    describe('handleSubmit', () => {
        it('should prevent default and call submitForm', () => {
            const e = { preventDefault: jest.fn() };
            const data = { email: 'test@example.com' };
            const post = jest.fn();
            const reset = jest.fn();
            const setEmailError = jest.fn();
            const setLoginError = jest.fn();
            const setShowSuspendedModal = jest.fn();

            handleSubmit(e, data, post, reset, setEmailError, setLoginError, setShowSuspendedModal);

            expect(e.preventDefault).toHaveBeenCalled();
            expect(post).toHaveBeenCalledWith('/login', expect.objectContaining({
                onFinish: expect.any(Function),
                onError: expect.any(Function),
            }));
        });
    });

    describe('handleFocus', () => {
        it('should reset loginError and emailError', () => {
            const setLoginError = jest.fn();
            const setEmailError = jest.fn();

            handleFocus(setLoginError, setEmailError);

            expect(setLoginError).toHaveBeenCalledWith(false);
            expect(setEmailError).toHaveBeenCalledWith(false);
        });
    });
});
