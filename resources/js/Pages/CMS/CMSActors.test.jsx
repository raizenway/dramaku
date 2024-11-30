import { validateForm, handleActorSubmit, handleActorUpdate, handleDeleteActor } from './CMSActors';
import { router as Inertia } from '@inertiajs/react';

jest.mock('@inertiajs/react', () => ({
  router: {
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
  usePage: jest.fn(() => ({
    props: {
      actors: [],
      countries: [],
    },
  })),
}));

describe('CMSActors Utility Functions', () => {
  describe('validateForm', () => {
    it('should return errors for missing required fields', () => {
      const formData = {};
      const errors = validateForm(formData);
      expect(errors).toEqual({
        name: "Actor name is required.",
        country_id: "Country selection is required.",
      });
    });

    it('should return error for invalid date format', () => {
      const formData = { birth: 'invalid-date' };
      const errors = validateForm(formData);
      expect(errors).toEqual({
        birth: "Invalid date format.",
        country_id: "Country selection is required.",
        name: "Actor name is required.",
      });
    });

    it('should return error for invalid URL format', () => {
      const formData = { photo_url: 'invalid-url' };
      const errors = validateForm(formData);
      expect(errors).toEqual({
        country_id: "Country selection is required.",
        name: "Actor name is required.",
        photo_url: "Invalid URL format.",
      });
    });

    it('should return no errors for valid form data', () => {
      const formData = {
        name: 'John Doe',
        country_id: 1,
        birth: '2000-01-01',
        photo_url: 'http://example.com/photo.jpg',
      };
      const errors = validateForm(formData);
      expect(errors).toEqual({});
    });
  });

  describe('handleActorSubmit', () => {
    it('should set errors if validation fails', () => {
      const formData = {};
      const setActorList = jest.fn();
      const setErrors = jest.fn();
      handleActorSubmit(formData, setActorList, setErrors);
      expect(setErrors).toHaveBeenCalledWith({
        name: "Actor name is required.",
        country_id: "Country selection is required.",
      });
    });

    it('should call Inertia.post if validation passes', () => {
      const formData = {
        name: 'John Doe',
        country_id: 1,
        birth: '2000-01-01',
        photo_url: 'http://example.com/photo.jpg',
      };
      const setActorList = jest.fn();
      const setErrors = jest.fn();
      handleActorSubmit(formData, setActorList, setErrors);
      expect(Inertia.post).toHaveBeenCalledWith('/cms-actors', formData, expect.any(Object));
    });
  });

  describe('handleActorUpdate', () => {
    it('should alert if actor ID is missing', () => {
      const formData = {};
      const actorList = [];
      const setActorList = jest.fn();
      const setErrors = jest.fn();
      global.alert = jest.fn();
      handleActorUpdate(formData, actorList, setActorList, setErrors);
      expect(global.alert).toHaveBeenCalledWith("Error: Actor ID not found.");
    });

    it('should set errors if validation fails', () => {
      const formData = { id: 1 };
      const actorList = [];
      const setActorList = jest.fn();
      const setErrors = jest.fn();
      handleActorUpdate(formData, actorList, setActorList, setErrors);
      expect(setErrors).toHaveBeenCalledWith({
        name: "Actor name is required.",
        country_id: "Country selection is required.",
      });
    });

    it('should call Inertia.put if validation passes', () => {
      const formData = {
        id: 1,
        name: 'John Doe',
        country_id: 1,
        birth: '2000-01-01',
        photo_url: 'http://example.com/photo.jpg',
      };
      const actorList = [];
      const setActorList = jest.fn();
      const setErrors = jest.fn();
      handleActorUpdate(formData, actorList, setActorList, setErrors);
      expect(Inertia.put).toHaveBeenCalledWith('/cms-actors/1', formData, expect.any(Object));
    });
  });

  describe('handleDeleteActor', () => {
    it('should call Inertia.delete with correct URL', () => {
      const item = { id: 1 };
      const actorList = [];
      const setActorList = jest.fn();
      handleDeleteActor(item, actorList, setActorList);
      expect(Inertia.delete).toHaveBeenCalledWith('/cms-actors/1', expect.any(Object));
    });
  });
});
