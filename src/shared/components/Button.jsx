import clsx from "clsx";

const Button = ({
  children,
  onClick,
  secondary = false,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-2xl px-8 py-4 font-medium",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "active:scale-[0.97]",

        // Primary (default)
        !secondary && [
          "bg-linear-to-r from-rose-300 to-pink-300",
          "text-white",
          "shadow-lg shadow-rose-300/40",
          "hover:from-rose-400 hover:to-pink-400",
          "hover:shadow-xl",
          "focus:ring-rose-300",
        ],

        // Secondary
        secondary && [
          "bg-rose-100",
          "text-rose-700",
          "border border-rose-200",
          "shadow-sm",
          "hover:bg-rose-200",
          "hover:shadow-md",
          "focus:ring-rose-200",
        ],

        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
