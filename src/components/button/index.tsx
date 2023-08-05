type ButtonTypes = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
};

const Button = ({ type, children,disabled, ...props }: ButtonTypes) => {
  return (
    <button
      className={`h-8 w-full rounded-lg text-white text-sm font-semibold bg-blue-400 ${
        disabled ? "bg-primary-button/70" : "bg-primary-button"
      }`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
