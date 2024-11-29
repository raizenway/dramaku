import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewSection from "./ReviewSection";

describe("Review Filter", () => {
    const mockReviews = [
        { author: "hari1", email: "hari1@example.com", content: "Keren banget", rating: 5 },
        { author: "hari2", email: "hari2@example.com", content: "Keren", rating: 4 },
        { author: "hari3", email: "hari3@example.com", content: "Oke", rating: 3 },
        { author: "hari3.2", email: "hari32@example.com", content: "Slepett", rating: 3 },
        { author: "hari4", email: "hari4@example.com", content: "Butut", rating: 2 },
        { author: "hari5", email: "hari5@example.com", content: "Butut pisan", rating: 1 },
    ];

    it("Menampilkan review sesuai dengan bintang yang dipilih", () => {
        render(<ReviewSection reviews={mockReviews} />);

        const stars = screen.getAllByText("★");
        fireEvent.click(stars[2]);

        const filteredReview = screen.getByText("Oke");
        expect(filteredReview).toBeInTheDocument();

        expect(screen.queryByText("Keren banget")).not.toBeInTheDocument();
        expect(screen.queryByText("Keren")).not.toBeInTheDocument();
        expect(screen.queryByText("Butut")).not.toBeInTheDocument();
        expect(screen.queryByText("Butut banget")).not.toBeInTheDocument();
    });

    it("Menghapus filter dan menampilkan seluruh review", () => {
        render(<ReviewSection reviews={mockReviews} />);

        const stars = screen.getAllByText("★");
        fireEvent.click(stars[2]);

        const clearButton = screen.getByText("Clear");
        fireEvent.click(clearButton);

        expect(screen.getByText("Keren banget")).toBeInTheDocument();
        expect(screen.getByText("Keren")).toBeInTheDocument();
        expect(screen.getByText("Oke")).toBeInTheDocument();
        expect(screen.getByText("Butut")).toBeInTheDocument();
        expect(screen.getByText("Butut pisan")).toBeInTheDocument();
    });
});
