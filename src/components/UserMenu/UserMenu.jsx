import { NavLink } from "react-router";
import { useThemes } from "../../context/ThemesContext";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations.js";

export const UserMenu = () => {
  const { theme } = useThemes();
  const dispatch = useDispatch();

  const getLinkClass = (isActive) => {
    const activeClass = `font-bold ${theme.mainText}`;
    const inactiveClass = "font-normal text-[#121417]";
    return `text-base leading-[1.25] ${isActive ? activeClass : inactiveClass}`;
  };
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => console.log("Logout successful"))
      .catch((err) => console.log("Logout failed:", err));
  };
  return (
    <div className="flex gap-[16px] items-center">
      <button
        className="flex gap-[8px] items-center cursor-pointer"
        onClick={handleLogout}
      >
        <svg
          className="inline-block w-5 h-5 fill-none"
          strokeWidth="2"
          stroke="red"
        >
          <use href="/sprite.svg#icon-log-in"></use>
        </svg>
        <span className="font-bold text-base leading-[1.25]">Log out</span>
      </button>
      <NavLink
        className={({ isActive }) => getLinkClass(isActive)}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
};
