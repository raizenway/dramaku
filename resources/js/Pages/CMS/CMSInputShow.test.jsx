import { 
  handleImageChange, 
  handleCheckboxChange, 
  addAward, 
  removeAward, 
  addActor, 
  removeActor, 
  createFormData, 
  resetForm 
} from './CMSInputShow';

describe('CMSInputShow functions', () => {
  let URLMock;

  beforeEach(() => {
    URLMock = {
      createObjectURL: jest.fn(() => 'mock-url'),
    };
    global.URL = URLMock;
  });

  describe('handleImageChange', () => {
    it('should set selectedImage and photoFile correctly', () => {
      const event = {
        target: {
          files: [new Blob(['file content'], { type: 'image/png' })],
        },
      };
      const setSelectedImageMock = jest.fn();
      const setPhotoFileMock = jest.fn();

      handleImageChange(event, setSelectedImageMock, setPhotoFileMock);

      expect(URLMock.createObjectURL).toHaveBeenCalledWith(event.target.files[0]);
      expect(setSelectedImageMock).toHaveBeenCalledWith('mock-url');
      expect(setPhotoFileMock).toHaveBeenCalledWith(event.target.files[0]);
    });
  });

  describe('handleCheckboxChange', () => {
    it('should add the ID if not present', () => {
      const id = 1;
      const selectedItems = [2, 3];
      const setSelectedItems = jest.fn();
  
      handleCheckboxChange(id, setSelectedItems, selectedItems);
  
      const updateFn = setSelectedItems.mock.calls[0][0];
      const newState = updateFn(selectedItems);
  
      expect(newState).toEqual([2, 3, 1]);
    });
  
    it('should remove the ID if already present', () => {
      const id = 1;
      const selectedItems = [1, 2, 3];
      const setSelectedItems = jest.fn();
  
      handleCheckboxChange(id, setSelectedItems, selectedItems);
  
      const updateFn = setSelectedItems.mock.calls[0][0];
      const newState = updateFn(selectedItems);
  
      expect(newState).toEqual([2, 3]);
    });
  });
  
  describe('addAward', () => {
    it('should add an award if not already present', () => {
      const award = { id: 1, name: 'Award 1' };
      const selectedAwards = [{ id: 2, name: 'Award 2' }];
      const setSelectedAwards = jest.fn();
      const setSearchTerm = jest.fn();

      addAward(award, selectedAwards, setSelectedAwards, setSearchTerm);

      expect(setSelectedAwards).toHaveBeenCalledWith([...selectedAwards, award]);
      expect(setSearchTerm).toHaveBeenCalledWith('');
    });
  });

  describe('removeAward', () => {
    it('should remove an award by ID', () => {
      const awardId = 1;
      const selectedAwards = [
        { id: 1, name: 'Award 1' },
        { id: 2, name: 'Award 2' },
      ];
      const setSelectedAwards = jest.fn();

      removeAward(awardId, selectedAwards, setSelectedAwards);

      expect(setSelectedAwards).toHaveBeenCalledWith([{ id: 2, name: 'Award 2' }]);
    });
  });

  describe('addActor', () => {
    it('should add an actor if not already present', () => {
      const actor = { id: 1, name: 'Actor 1' };
      const selectedActors = [{ id: 2, name: 'Actor 2' }];
      const setSelectedActors = jest.fn();
      const setSearchTerm = jest.fn();

      addActor(actor, selectedActors, setSelectedActors, setSearchTerm);

      expect(setSelectedActors).toHaveBeenCalledWith([...selectedActors, actor]);
      expect(setSearchTerm).toHaveBeenCalledWith('');
    });
  });

  describe('removeActor', () => {
    it('should remove an actor by ID', () => {
      const actorId = 1;
      const selectedActors = [
        { id: 1, name: 'Actor 1' },
        { id: 2, name: 'Actor 2' },
      ];
      const setSelectedActors = jest.fn();

      removeActor(actorId, selectedActors, setSelectedActors);

      expect(setSelectedActors).toHaveBeenCalledWith([{ id: 2, name: 'Actor 2' }]);
    });
  });

  describe('createFormData', () => {
    it('should create FormData with correct values', () => {
      const state = {
        title: 'Sample Title',
        alternativeTitle: 'Alt Title',
        year: '2024',
        countryId: 1,
        synopsis: 'Sample synopsis',
        linkTrailer: 'http://example.com/trailer',
        selectedAwards: [{ id: 1, name: 'Award 1' }],
        selectedGenres: [{ id: 1, name: 'Genre 1' }],
        selectedPlatforms: [{ id: 1, name: 'Platform 1' }],
        selectedActors: [{ id: 1, name: 'Actor 1' }],
        photoFile: new Blob(['file content'], { type: 'image/png' }),
      };

      const formData = createFormData(state);

      expect(formData.get('title')).toBe('Sample Title');
      expect(formData.get('alternative_title')).toBe('Alt Title');
      expect(formData.get('year')).toBe('2024');
      expect(formData.get('country_id')).toBe('1');
      expect(formData.get('synopsis')).toBe('Sample synopsis');
      expect(formData.get('link_trailer')).toBe('http://example.com/trailer');
      expect(formData.get('awards')).toBe(JSON.stringify(state.selectedAwards.map((award) => award.id)));
      expect(formData.get('genres')).toBe(JSON.stringify(state.selectedGenres));
      expect(formData.get('availability')).toBe(JSON.stringify(state.selectedPlatforms));
      expect(formData.get('actors')).toBe(JSON.stringify(state.selectedActors.map((actor) => actor.id)));
      expect(formData.get('photo')).toBeInstanceOf(Blob);
    });
  });

  describe('resetForm', () => {
    it('should reset all form state values', () => {
      const setStateMock = jest.fn();

      resetForm(setStateMock);

      expect(setStateMock).toHaveBeenCalledWith({
        title: '',
        alternativeTitle: '',
        year: '',
        countryId: '',
        synopsis: '',
        linkTrailer: '',
        selectedAwards: [],
        selectedGenres: [],
        selectedPlatforms: [],
        selectedActors: [],
        photoUrl: '',
        searchTerm: '',
      });
    });
  });
});
