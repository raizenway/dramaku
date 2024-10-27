function InputField({ type, placeholder, value, onChange, hasError }) {
    return (
        <div className="mb-[22px]">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none placeholder:text-dark-6 text-white
                    ${hasError ? 'border-red-600' : 'border-stroke'} 
                    focus:border-primary focus-visible:shadow-none`}
            />
        </div>
    );
}

export default InputField;
