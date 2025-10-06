import { PuffLoader } from "react-spinners";
import { useThemes } from "../../context/ThemesContext";
import { useEffect, useState } from "react";

const Loader = () => {
  const { theme } = useThemes();
  const [loaderSize, setLoaderSize] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setLoaderSize(40);
      else if (window.innerWidth < 1024) setLoaderSize(60);
      else setLoaderSize(80);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <PuffLoader
        color={theme.mainColor}
        loading={true}
        size={loaderSize}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
