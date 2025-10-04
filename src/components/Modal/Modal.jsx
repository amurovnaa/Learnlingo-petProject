import { useEffect, useCallback } from "react";

const Modal = ({ isOpen, onClose, title, children, styleModal }) => {
  const handleEsc = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleEsc]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto "
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-[30px] shadow-lg relative  ${styleModal}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="inline-block w-8 h-8"
            strokeWidth="2.5"
            stroke="#121417"
            fill="#121417"
          >
            <use href="/sprite.svg#icon-x"></use>
          </svg>
        </button>

        <div className="p-[64px]">
          {title && (
            <h2 className="font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-[#121417] mb-5">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
