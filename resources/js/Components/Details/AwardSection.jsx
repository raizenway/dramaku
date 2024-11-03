import React from "react";

const AwardSection = ({ awards = [] }) => {
    return (
        <div className="mb-10">
            <h2 className="text-4xl font-semibold text-dark">Awards</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            <div className={`overflow-auto p-4 mb-10 ${awards.length > 0 ? 'max-h-80' : ''}`} style={{ maxHeight: awards.length > 0 ? 'h-80' : 'auto' }}>
                {awards.length > 0 ? (
                    awards.map((award, index) => (
                        <div key={index} className="mb-4 p-4 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-body-color">{award}</h3>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No awards available.</p>
                )}
            </div>
        </div>
    );
};

export default AwardSection;