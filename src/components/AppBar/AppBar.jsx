import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import logoImg from "../../assets/images/logo-uk.png";
import { NavLink } from "react-router";
import Modal from "../Modal/Modal";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="transition-colors duration-500 flex justify-between items-center my-5 px-6 md:px-12 xl:px-32 min-h-12">
        <NavLink className="flex gap-2 items-center" to="/">
          <img src={logoImg} alt="Ukraine flag Logo" />
          <span className="font-roboto font-medium text-xl leading-[1.2] tracking-[-0.02em]">
            LearnLingo
          </span>
        </NavLink>

        <div className="hidden md:flex">
          <Navigation />
        </div>
        <div className="hidden md:flex">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="#121417" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      <Modal
        isOpen={isOpen}
        onClose={closeMenu}
        styleModal="max-w-[320px] w-full p-4"
      >
        <nav className="flex flex-col gap-6 items-center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </Modal>
    </>
  );
};
