type ButtonTypes = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button = ({ type, children, disabled, className, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className={`h-8 w-full rounded-lg text-white text-sm font-semibold bg-blue-400 ${
        disabled ? "bg-primary-button/70" : "bg-primary-button"
      } ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
