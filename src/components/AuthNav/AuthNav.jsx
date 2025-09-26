import { NavLink } from "react-router-dom";
import { useThemes } from "../../context/ThemesContext.jsx";

export const AuthNav = () => {
  const { theme } = useThemes();
  return (
    <div className="flex gap-[16px] items-center">
      <div className="flex gap-[8px] items-center cursor-pointer">
        <svg
          className="inline-block w-5 h-5 fill-none"
          strokeWidth="2"
          stroke={theme.mainColor}
        >
          <use href="/sprite.svg#icon-log-in"></use>
        </svg>
        <span className="font-bold text-base leading-[1.25]">Log in </span>
      </div>

      <button
        // onClick={openModal}
        className="w-[166px] h-12 bg-[#121417] px-[39px] py-3.5 rounded-xl font-bold text-base leading-[1.25] text-white"
      >
        Register
      </button>
    </div>
  );
};
