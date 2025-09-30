import { useState } from "react";
import { useThemes } from "../../context/ThemesContext.jsx";

const TeacherCard = ({ teacher, isFavorite, onToggleFavorite }) => {
  const [expandedText, setExpandedText] = useState(true);
  const { theme } = useThemes();
  return (
    <li className="flex gap-12 items-start p-6 rounded-3xl bg-[#fff]">
      <div
        className={`flex items-center justify-center min-w-[120px] min-h-[120px] rounded-[100px] border-[3px] border-solid`}
        style={{ borderColor: theme.lightColor }}
      >
        <img
          className="rounded-[100px]"
          width="96px"
          height="96px"
          src={teacher.avatar_url}
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-8">
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
            <ul className="flex gap-4 font-medium text-base leading-normal">
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
            <button>
              <svg
                className="inline-block w-[26px] h-[26px] fill-none"
                strokeWidth="2"
                stroke="#121417"
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

        {expandedText && (
          <div>
            <p className="font-normal text-base leading-normal mb-8">
              {teacher.experience}
            </p>
            <ul className="flex flex-col gap-8 mb-8">
              {teacher.reviews.map((reviewer, idx) => (
                <li key={idx} className="flex flex-col gap-4 ">
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
                  <p className="font-medium text-base leading-normal ">
                    {reviewer.comment}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="flex gap-2 items-center mb-8">
          {teacher.levels.map((level, idx) => (
            <li
              key={idx}
              className={`px-3 py-2 rounded-[35px] font-medium text-sm leading-[1.14] ${theme.buttonBg}`}
            >
              <p>{level}</p>
            </li>
          ))}
        </ul>
        {expandedText && (
          <button
            className={`font-bold text-lg leading-[1.56] px-12 py-4 rounded-xl ${theme.buttonBg}`}
          >
            Book trial lesson
          </button>
        )}
      </div>
    </li>
  );
};

export default TeacherCard;
