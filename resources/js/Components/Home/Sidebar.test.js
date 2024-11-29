import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from './Sidebar';

jest.mock('@inertiajs/react', () => ({
    ...jest.requireActual('@inertiajs/react'),
    usePage: jest.fn(() => ({
        props: {
            auth: {
                user: {
                    id: 1,
                    name: "Test User",
                    email: "test@example.com"
                },
            },
        },
    })),
}));

describe("Sidebar Component", () =>{
    const mockCountries = ["China", "Japan", "Korea", "Indonesia"]

    it("Menampilkan data negara sesuai dengan database", () => {
        render(<Sidebar countries={mockCountries} />);


        mockCountries.forEach((country) => {
            const countryElement = screen.getByText(country);
            expect(countryElement).toBeInTheDocument();
        });
    });
});