import { useState } from "react";
import { useThemes } from "../../context/ThemesContext";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";
import { selectLevel } from "../../redux/filters/selectors.js";

const TeacherCard = ({ teacher, isFavorite, onToggleFavorite }) => {
  const [expandedText, setExpandedText] = useState(false);
  const { theme } = useThemes();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const selectedLevel = useSelector(selectLevel);

  const expandText = () => {
    setExpandedText(true);
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <li
      className="flex gap-4 lg:gap-12 items-center lg:items-start flex-col lg:flex-row justify-between p-6 rounded-3xl bg-[#fff] 
    min-w-[100%] max-h-[100%] min-h-[328px] max-w-[1042px] xl:max-w-[1184px]"
    >
      <div
        className={`relative flex items-center justify-center min-w-[120px] 
          min-h-[120px] rounded-[100px] border-[3px] border-solid`}
        style={{ borderColor: theme.lightColor }}
      >
        <img
          className=" rounded-[100px]"
          width="96px"
          height="96px"
          src={teacher.avatar_url}
        />
        <svg className="inline-block absolute w-3 h-3 top-[15px] right-[20px]">
          <use href="/sprite.svg#icon-online"></use>
        </svg>
      </div>
      <div className="max-w-[100%] w-[968px] xl:min-w-[968px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between items-start mb-8">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-base leading-normal text-[#8a8a89]">
              Languages
            </span>
            <p className="font-medium text-2xl leading-none">
              {teacher.name} {""}
              {teacher.surname}
            </p>
          </div>
          <div className="flex gap-16 items-center">
            <ul className="flex gap-2 flex-wrap xl:gap-4 font-medium text-base leading-normal">
              <li>
                <svg className="mr-2 inline-block w-4 h-4 stroke-0 stroke-current fill-none">
                  <use href="/sprite.svg#icon-book-open"></use>
                </svg>
                <span>Lessons online</span>
              </li>
              <li>
                <svg
                  className="inline-block w-[2px] h-4"
                  strokeWidth="1"
                  stroke="rgba(18, 20, 23, 0.2)"
                  fill="rgba(18, 20, 23, 0.2)"
                >
                  <use href="/sprite.svg#icon-list-line"></use>
                </svg>
              </li>
              <li>
                <span>Lessons done: {teacher.lessons_done}</span>
              </li>
              <li>
                <svg
                  className="inline-block w-[2px] h-4"
                  strokeWidth="1"
                  stroke="rgba(18, 20, 23, 0.2)"
                  fill="rgba(18, 20, 23, 0.2)"
                >
                  <use href="/sprite.svg#icon-list-line"></use>
                </svg>
              </li>
              <li>
                <svg
                  className="inline-block w-4 h-4 mr-2"
                  strokeWidth="1.2"
                  stroke="#ffc531"
                  fill="#ffc531"
                >
                  <use href="/sprite.svg#icon-star"></use>
                </svg>
                <span>Rating: {teacher.rating}</span>
              </li>
              <li>
                <svg
                  className="inline-block w-[2px] h-4"
                  strokeWidth="1"
                  stroke="rgba(18, 20, 23, 0.2)"
                  fill="rgba(18, 20, 23, 0.2)"
                >
                  <use href="/sprite.svg#icon-list-line"></use>
                </svg>
              </li>
              <li>
                <span>
                  Price / 1 hour:{" "}
                  <span className="text-[#38cd3e]">
                    {teacher.price_per_hour}$
                  </span>
                </span>
              </li>
            </ul>
            <button onClick={() => onToggleFavorite(teacher)}>
              <svg
                className="inline-block w-[26px] h-[26px]"
                stroke={isLoggedIn && isFavorite ? theme.mainColor : "#121417"}
                fill={isLoggedIn && isFavorite ? theme.mainColor : "none"}
              >
                <use href="/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 mb-4 font-medium text-base leading-normal text-[#8a8a89]">
          <li>
            <p>
              Speaks:{" "}
              <span className="underline text-[#121417]">
                {teacher.languages?.length > 0
                  ? teacher.languages.join(", ")
                  : "No languages specified"}
              </span>
            </p>
          </li>
          <li>
            <p>
              Lesson Info:{" "}
              <span className="text-[#121417]">{teacher.lesson_info}</span>
            </p>
          </li>
          <li>
            <p>
              Conditions:{" "}
              <span className="text-[#121417]">
                {teacher.conditions?.length > 0
                  ? teacher.conditions.join(" ")
                  : "No conditions specified"}
              </span>
            </p>
          </li>
        </ul>
        {!expandedText && (
          <button className="mb-8" onClick={expandText}>
            <p className="font-medium text-base leading-normal underline ">
              Read more
            </p>
          </button>
        )}
        <AnimatePresence>
          {expandedText && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="font-normal text-base leading-normal mb-8">
                {teacher.experience}
              </p>
              <ul className="flex flex-col gap-8 mb-8">
                {teacher.reviews.map((reviewer, idx) => (
                  <li key={idx} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 max-h-11">
                      {reviewer.avatar_url ? (
                        <img
                          src={reviewer.avatar_url}
                          alt={reviewer.reviewer_name}
                          className="w-11 h-11 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium text-base">
                          {reviewer.reviewer_name[0].toUpperCase()}
                        </div>
                      )}

                      <div>
                        <p className="font-medium text-base leading-normal text-[#8a8a89]">
                          {reviewer.reviewer_name}
                        </p>
                        <div className="flex gap-2 items-center">
                          <svg
                            className="inline-block w-4 h-4"
                            strokeWidth="1.2"
                            stroke="#ffc531"
                            fill="#ffc531"
                          >
                            <use href="/sprite.svg#icon-star"></use>
                          </svg>
                          <span>{reviewer.reviewer_rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-medium text-base leading-normal">
                      {reviewer.comment}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="flex gap-2 flex-wrap items-center">
          {teacher.levels.map((level, idx) => {
            const isActive = selectedLevel?.includes(level);
            return (
              <li
                key={idx}
                className={`px-3 py-2 rounded-[35px] font-medium text-sm leading-[1.14] border border-solid ${
                  isActive ? "border-none" : "border-[rgba(18,20,23,0.2)]"
                }`}
                style={isActive ? { backgroundColor: theme.mainColor } : {}}
              >
                <p>#{level}</p>
              </li>
            );
          })}
        </ul>

        <AnimatePresence>
          {expandedText && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Button
                className={` max-h-[60px] px-11 py-4 mt-8`}
                onClick={openModal}
              >
                Book trial session
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title="Book trial lesson"
          styleModal="max-h-[972px] max-w-[600px] lg:max-h-[90vh]
     "
        >
          <BookingForm teacher={teacher} onSubmit={closeModal} />
        </Modal>
      </div>
    </li>
  );
};

export default TeacherCard;
