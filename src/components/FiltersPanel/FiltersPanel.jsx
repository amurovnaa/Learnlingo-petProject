import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  setLevel,
  setPrice,
  resetFilters,
} from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { Listbox } from "@headlessui/react";

const languages = [
  "French",
  "English",
  "German",
  "Ukrainian",
  "Polish",
  "Spanish",
  "Mandarin Chinese",
  "Italian",
  "Korean",
  "Vietnamese",
];
const levels = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];
const prices = [10, 20, 30, 40];
const getMarginClass = (index, array) =>
  index !== array.length - 1 ? "mb-2" : "";

export const FiltersPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <div className="flex gap-5 mb-8 flex-wrap">
      <div className="relative w-[221px]">
        <p className="font-medium text-sm leading-[1.29] text-[#8a8a89] mb-2">
          Languages
        </p>
        <Listbox
          value={filters.language[0] || ""}
          onChange={(val) => dispatch(setLanguage(val ? [val] : []))}
        >
          <div className="relative">
            <Listbox.Button
              className="flex items-center justify-between w-full bg-white
                         border border-transparent hover:border-gray-300 
                         focus:border-gray-400 text-lg font-medium
                         rounded-[14px] px-[18px] py-3.5 hover:shadow-md
                         transition-all duration-200 text-[#121417] truncate"
            >
              <span className="truncate">
                {filters.language[0] || "Select language"}
              </span>
              <svg
                className="w-5 h-5 text-[#121417]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Listbox.Button>

            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto 
                         rounded-[14px] bg-white py-[14px] px-[18px] text-base shadow-lg 
                         focus:outline-none z-10"
            >
              {languages.map((lang, index) => (
                <Listbox.Option
                  key={lang}
                  value={lang}
                  className={`cursor-pointer select-none truncate font-medium text-lg leading-[1.11] transition-colors duration-150 
            text-[rgba(18,20,23,0.4)] hover:text-[#121417] 
            ui-active:text-[#121417] ui-selected:text-[#121417] ${getMarginClass(
              index,
              languages
            )}`}
                >
                  {lang}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="relative w-[198px]">
        <p className="font-medium text-sm leading-[1.29] text-[#8a8a89] mb-2">
          Level of knowledge
        </p>
        <Listbox
          value={filters.level[0] || ""}
          onChange={(val) => dispatch(setLevel(val ? [val] : []))}
        >
          <div className="relative">
            <Listbox.Button
              className="flex items-center justify-between w-full bg-white
                         border border-transparent hover:border-gray-300 
                         focus:border-gray-400 text-lg font-medium
                         rounded-[14px] px-[18px] py-3.5 hover:shadow-md
                         transition-all duration-200 text-[#121417] truncate"
            >
              <span className="truncate">
                {filters.level[0] || "Select level"}
              </span>
              <svg
                className="w-5 h-5 text-[#121417]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Listbox.Button>

            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto 
                         rounded-[14px] bg-white py-[14px] px-[18px] text-base shadow-lg 
                         focus:outline-none z-10"
            >
              {levels.map((lvl, index) => (
                <Listbox.Option
                  key={lvl}
                  value={lvl}
                  className={`cursor-pointer select-none truncate font-medium text-lg leading-[1.11] transition-colors duration-150 
            text-[rgba(18,20,23,0.4)] hover:text-[#121417] 
            ui-active:text-[#121417] ui-selected:text-[#121417] ${getMarginClass(
              index,
              levels
            )}`}
                >
                  {lvl}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="relative w-[124px]">
        <p className="font-medium text-sm leading-[1.29] text-[#8a8a89] mb-2">
          Price
        </p>
        <Listbox
          value={filters.price || ""}
          onChange={(val) => dispatch(setPrice(val || null))}
        >
          <div className="relative">
            <Listbox.Button
              className="flex items-center justify-between w-full bg-white
                         border border-transparent hover:border-gray-300 
                         focus:border-gray-400 text-lg font-medium
                         rounded-[14px] px-[18px] py-3.5 hover:shadow-md
                         transition-all duration-200 text-[#121417] truncate"
            >
              <span className="truncate">
                {filters.price ? `${filters.price} $` : "Select price"}
              </span>
              <svg
                className="w-5 h-5 text-[#121417]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Listbox.Button>

            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto 
                         rounded-[14px] bg-white py-[14px] px-[18px] text-base shadow-lg 
                         focus:outline-none z-10"
            >
              {prices.map((price, index) => (
                <Listbox.Option
                  key={price}
                  value={price}
                  className={`cursor-pointer select-none truncate font-medium text-lg leading-[1.11] transition-colors duration-150 
            text-[rgba(18,20,23,0.4)] hover:text-[#121417] 
            ui-active:text-[#121417] ui-selected:text-[#121417] ${getMarginClass(
              index,
              prices
            )}`}
                >
                  {price} $
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </div>
  );
};
