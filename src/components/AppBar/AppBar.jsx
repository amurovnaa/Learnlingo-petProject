import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { AuthNav } from "../AuthNav/AuthNav.jsx";
import { UserMenu } from "../UserMenu/UserMenu.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";
import logoImg from "../../assets/images/logo-uk.png";
import { NavLink } from "react-router";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="transition-colors duration-500 flex justify-between my-[20px] items-center xl:px-[128px] ">
      <NavLink className="flex gap-[8px] items-center" to="/">
        <img src={logoImg} alt="Ukraine flag Logo" />
        <span className="font-roboto font-medium text-xl leading-[1.2] tracking-[-0.02em]">
          LearnLingo
        </span>
      </NavLink>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
