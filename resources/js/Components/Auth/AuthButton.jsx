function AuthButton({ text, isPrimary = true, icon, onClick, disabled }) {
  return (
    <div className="mb-[22px]">
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className={`flex ${icon ? 'gap-1' : ''} justify-center w-full px-5 py-3 text-base transition duration-300 ease-in-out border rounded-md cursor-pointer ${
          isPrimary
            ? 'text-white border-primary bg-primary hover:bg-blue-dark'
            : 'text-dark bg-white border-primary hover:bg-blue-dark hover:text-white'
        }`}
      >
        {icon && <img src={icon} alt="icon" style={{ width: "1.5rem" }} />}
        <span>{text}</span>
      </button>
    </div>
  );
}

export default AuthButton;
