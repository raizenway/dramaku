import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import Filter from './Filter';

jest.mock('axios');

test('fetches and sets filters data on mount', async () => {
    const mockData = { 
        years: [2020, 2021, 2023, 2004, 2007, 2021, 2024, 2007, 2024, 2014, 2015, 2018, 2014, 2015, 2019, 2017, 2009, 2010, 2024],
        availability: ['Amazon Prime Video', 'Crunchyroll', 'Disney+', 'Max', 'Netflix', 'YouTube TV'],
        award: ['Yes', 'No']
    };
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<Filter />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledWith('/api/filters')); // Memastikan API dipanggil
    expect(axios.get).toHaveBeenCalledTimes(1);

    // Memastikan data API diproses (contoh memeriksa elemen yang dirender)
    await waitFor(() => {
        expect(screen.getByText('2020')).toBeInTheDocument();
        expect(screen.getByText('Drama')).toBeInTheDocument();
    });
});