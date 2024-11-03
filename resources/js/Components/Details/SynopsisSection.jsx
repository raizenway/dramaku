const SynopsisSection = ({ synopsis, platforms }) => {
    return (
        <div className="mb-10">
            <h2 className="text-4xl font-semibold text-dark">Synopsis</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            <p className="text-base text-body-color">{synopsis}</p>
            <p className="mt-4 text-base text-body-color">
                <strong>Available on</strong> {platforms.join(" and ")}
            </p>
        </div>
    );
};

export default SynopsisSection;
