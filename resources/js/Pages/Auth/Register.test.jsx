import { validateEmail, validatePasswords } from './Register';
describe('Register Utility Functions', () => {
    describe('validateEmail', () => {
        it('should return true for valid email', () => {
            expect(validateEmail('test@example.com')).toBe(true);
        });

        it('should return false for invalid email', () => {
            expect(validateEmail('invalid-email')).toBe(false);
        });

        it('should return false for email without domain', () => {
            expect(validateEmail('test@')).toBe(false);
        });

        it('should return false for email without username', () => {
            expect(validateEmail('@example.com')).toBe(false);
        });
    });

    describe('validatePasswords', () => {
        it('should return true if passwords match', () => {
            expect(validatePasswords('password123', 'password123')).toBe(true);
        });

        it('should return false if passwords do not match', () => {
            expect(validatePasswords('password123', 'password456')).toBe(false);
        });

        it('should return false if one of the passwords is empty', () => {
            expect(validatePasswords('password123', '')).toBe(false);
        });
    });
});