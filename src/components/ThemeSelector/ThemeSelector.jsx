import { useState, useEffect, useRef } from "react";
import { useThemes } from "../../context/ThemesContext";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react"; // pretty icon

const ThemeSelector = () => {
  const { themes, themeIndex, setThemeIndex } = useThemes();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Main trigger */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change theme"
        whileTap={{ scale: 0.9, rotate: 15 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        className={`w-10 h-10 flex items-center justify-center rounded-full 
          shadow-md
          ${themes[themeIndex].buttonBg}`}
      >
        <Palette className="w-5 h-5 text-white" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.15, type: "spring", stiffness: 50 }}
            className="absolute top-12 right-0 flex gap-3 px-4 py-3 rounded-2xl bg-white backdrop-blur-xl border shadow-lg"
          >
            {themes.map((t, index) => (
              <motion.button
                key={t.name}
                title={t.name}
                whileHover={{
                  scale: 1,
                  rotate: 10,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setThemeIndex(index);
                  setOpen(false);
                }}
                className={`w-6 h-6 rounded-full border-[1px] transition-all 
                  ${
                    themeIndex === index
                      ? "border-gray-500"
                      : "border-transparent"
                  } ${t.buttonBg}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
