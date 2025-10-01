import { PuffLoader } from "react-spinners";
import { useThemes } from "../../context/ThemesContext.jsx";

const Loader = () => {
  const { theme } = useThemes();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <PuffLoader
        color={theme.mainColor}
        loading={true}
        size={80}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
