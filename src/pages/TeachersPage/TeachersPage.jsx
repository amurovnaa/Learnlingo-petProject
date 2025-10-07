import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations.js";
import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import TeachersList from "../../components/TeachersList/TeachersList";
import {
  selectError,
  selectHasMoreItems,
  selectIsLoading,
  selectTeachersItem,
} from "../../redux/teachers/selectors.js";
import { useThemes } from "../../context/ThemesContext";
import Loader from "../../components/Loader/Loader";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import Modal from "../../components/Modal/Modal";
import AuthForm from "../../components/AuthForm/AuthForm";
import { selectFilters } from "../../redux/filters/selectors.js";
import { FiltersPanel } from "../../components/FiltersPanel/FiltersPanel";
import { resetTeachers } from "../../redux/teachers/slice.js";
import { resetFilters } from "../../redux/filters/slice.js";

const TeachersPage = () => {
  const { theme } = useThemes();
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachersItem);
  const filters = useSelector(selectFilters);

  const isError = useSelector(selectError);
  const hasMoreItems = useSelector(selectHasMoreItems);
  const isLoading = useSelector(selectIsLoading);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [favorites, setFavorites] = useState([]);
  const [loadingFavorite, setLoadingFavorite] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetTeachers());
    dispatch(fetchTeachers({ lastIndex: 0, limit: 4, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchTeachers({ lastIndex: teachers.length, limit: 4, filters }));
  };

  const toggleFavorite = async (teacher) => {
    if (!isLoggedIn) {
      setModalType("register");
      return;
    }
    try {
      setLoadingFavorite(true);
      await new Promise((resolve) => setTimeout(resolve, 400));

      setFavorites((prev) =>
        prev.some((fav) => fav.id === teacher.id)
          ? prev.filter((fav) => fav.id !== teacher.id)
          : [...prev, teacher]
      );
    } finally {
      setLoadingFavorite(false);
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <main className="bg-[#f8f8f8]">
      {(isLoading || loadingFavorite) && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
          <Loader />
        </div>
      )}
      <Container className="py-12 lg2:px-32 md:py-24">
        <section className="">
          {isError && (
            <p className="text-red-500">Error loading teachers... 😢</p>
          )}
          <FiltersPanel />
          <TeachersList
            teachers={teachers}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
          {teachers.length === 0 && !isLoading && (
            <p className="text-center text-gray-500 mt-6">
              No teachers found for selected filters 😢
            </p>
          )}
          {hasMoreItems && !isLoading && (
            <div className="flex justify-center items-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className={`font-bold text-lg leading-[1.56] px-12 py-4 rounded-xl ${theme.buttonBg}`}
              >
                Load More
              </button>
            </div>
          )}

          <Modal
            isOpen={modalType === "register"}
            onClose={closeModal}
            title={modalType === "login" ? "Login" : "Register"}
            styleModal={"max-w-[566px]"}
          >
            <AuthForm type={modalType} onSubmit={closeModal} />
          </Modal>
        </section>
      </Container>
    </main>
  );
};

export default TeachersPage;
