import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  setLevel,
  setPrice,
  resetFilters,
} from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

export const FiltersPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <div className="flex gap-3 mb-6">
      {/* Language */}
      <select
        value={filters.language[0] || ""}
        onChange={(e) =>
          dispatch(setLanguage(e.target.value ? [e.target.value] : []))
        }
      >
        <option value="">All languages</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>

      {/* Level */}
      <select
        value={filters.level[0] || ""}
        onChange={(e) =>
          dispatch(setLevel(e.target.value ? [e.target.value] : []))
        }
      >
        <option value="">All levels</option>
        <option value="A1 Beginner">A1 Beginner</option>
        <option value="A2 Elementary">A2 Elementary</option>
        <option value="B1 Intermediate">B1 Intermediate</option>
        <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
        <option value="C1 Advanced">C1 Advanced</option>
        <option value="C2 Proficient">C2 Proficient</option>
      </select>

      {/* Price */}
      <select
        value={filters.price || ""}
        onChange={(e) => {
          const val = e.target.value;
          dispatch(setPrice(val ? Number(val) : null));
        }}
      >
        <option value="">Max price</option>
        <option value="10">$10</option>
        <option value="20">$20</option>
        <option value="30">$30</option>
        <option value="40">$40</option>
      </select>
    </div>
  );
};
