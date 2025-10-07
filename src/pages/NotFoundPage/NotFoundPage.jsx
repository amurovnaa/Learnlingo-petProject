import Container from "../../components/Container/Container.jsx";
import { useThemes } from "../../context/ThemesContext.jsx";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { theme } = useThemes();

  return (
    <section className="flex items-center justify-center min-h-[80vh] px-6">
      <Container className="text-center">
        <h1
          className="text-[120px] font-bold leading-none mb-4"
          style={{ color: theme.mainColor }}
        >
          404
        </h1>

        <h2 className="text-2xl font-semibold text-[#121417] mb-4">
          Oops! Page not found.
        </h2>

        <p className="font-normal text-base leading-[1.37] tracking-[-0.02em] text-[rgba(18,20,23,0.7)] mb-10 max-w-[420px] mx-auto">
          The page you’re looking for doesn’t exist or was moved. Let’s get you
          back on track!
        </p>

        <Link
          to="/"
          className={`inline-block px-10 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-md`}
          style={{ backgroundColor: theme.mainColor }}
        >
          Go Home
        </Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
