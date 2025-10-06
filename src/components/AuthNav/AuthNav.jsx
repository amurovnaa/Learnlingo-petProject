import { useThemes } from "../../context/ThemesContext.jsx";
import Modal from "../Modal/Modal.jsx";
import AuthForm from "../AuthForm/AuthForm.jsx";
import { useState } from "react";

export const AuthNav = () => {
  const { theme } = useThemes();
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="flex gap-[16px] items-center">
      <button
        className="flex gap-[8px] items-center cursor-pointer"
        onClick={() => openModal("login")}
      >
        <svg
          className="inline-block w-5 h-5 fill-none"
          strokeWidth="2"
          stroke={theme.mainColor}
        >
          <use href="/sprite.svg#icon-log-in"></use>
        </svg>
        <span className="font-bold text-base leading-[1.25]">Log in </span>
      </button>

      <button
        onClick={() => openModal("register")}
        className="w-[166px] h-12 bg-[#121417] px-[39px] py-3.5 rounded-xl font-bold text-base leading-[1.25] text-white"
      >
        Register
      </button>
      <Modal
        isOpen={modalType === "login" || modalType === "register"}
        onClose={closeModal}
        title={modalType === "login" ? "Login" : "Register"}
        styleModal="max-w-[566px]"
      >
        <AuthForm type={modalType} onSubmit={closeModal} />
      </Modal>
    </div>
  );
};
