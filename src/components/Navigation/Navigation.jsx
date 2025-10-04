import { NavLink } from "react-router-dom";
import { useThemes } from "../../context/ThemesContext";

export const Navigation = () => {
  const { theme } = useThemes();

  const getLinkClass = (isActive) => {
    const activeClass = `font-bold ${theme.mainText}`;
    const inactiveClass = "font-normal text-[#121417]";
    return `text-base leading-[1.25] ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="flex gap-[28px] items-center">
      <NavLink className={({ isActive }) => getLinkClass(isActive)} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => getLinkClass(isActive)}
        to="/teachers"
      >
        Teachers
      </NavLink>
    </nav>
  );
};
