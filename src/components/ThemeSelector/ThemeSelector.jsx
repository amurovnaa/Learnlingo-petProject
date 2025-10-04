import { useThemes } from "../../context/ThemesContext";

const ThemeSelector = () => {
  const { themes, themeIndex, setThemeIndex } = useThemes();

  return (
    <div className="flex gap-2">
      {themes.map((t, index) => (
        <button
          key={t.name}
          className={`w-6 h-6 rounded-full border-2 ${
            themeIndex === index ? "border-black" : "border-gray-300"
          } ${t.containerBg}`}
          onClick={() => setThemeIndex(index)}
        />
      ))}
    </div>
  );
};

export default ThemeSelector;
