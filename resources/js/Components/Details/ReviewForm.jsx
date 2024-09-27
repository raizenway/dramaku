const ReviewForm = () => {
    return (
        <form className="mb-10 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add yours!</h2>
            <div className="mb-4 lg:w-1/2">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div className="mb-4 lg:w-1/2">
                <label htmlFor="rate">Rate</label>
                <div className="flex space-x-1">
                    <span className="text-gray-300 text-xl">★</span>
                    <span className="text-gray-300 text-xl">★</span>
                    <span className="text-gray-300 text-xl">★</span>
                    <span className="text-gray-300 text-xl">★</span>
                    <span className="text-gray-300 text-xl">★</span>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="thoughts">Your thoughts</label>
                <textarea
                    id="thoughts"
                    name="thoughts"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <p className="text-body-secondary">you can only submit your comment once.</p>
            <div className="m-4 w-full">
                <a className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark">
                    Submit
                </a>
            </div>
        </form>
    );
};

export default ReviewForm;
