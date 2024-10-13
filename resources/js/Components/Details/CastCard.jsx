const CastCard = ({ name, role, image }) => {
    return (
        <div className="w-full p-4 md:w-1/2 lg:w-3/12 flex items-center border-b border-stroke">
            {image ? (
                <div className="mr-5 h-20 w-20 rounded-full overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            ) : (
                <div className="mr-5 h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                </div>
            )}
            <div>
                <h4 className="text-lg font-medium leading-snug text-dark">{name}</h4>
                <p className="text-sm text-body-color">{role}</p>
            </div>
        </div>
    );
};

export default CastCard;