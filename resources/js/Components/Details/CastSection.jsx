import React from "react";
import CastCard from "./CastCard";

const CastSection = ({ casts }) => {
    return (
        <div className="mb-10">
            <h2 className="text-4xl font-semibold text-dark">Casts</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            <div className="flex flex-wrap mb-4">
                {casts.map((cast, index) => (
                    <CastCard key={index} name={cast.name} role={cast.role} image={cast.image} />
                ))}
            </div>
        </div>
    );
};

export default CastSection;
