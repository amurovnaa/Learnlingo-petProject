import { useThemes } from "../../context/ThemesContext";

const Button = ({ children, className = "", ...props }) => {
  const { theme } = useThemes();

  return (
    <button
      className={` ${theme.buttonBg} transition-colors duration-300 rounded-xl font-bold text-lg leading-[1.56] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
