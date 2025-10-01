import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations.js";
import { useEffect, useState } from "react";
import Container from "../../components/Container/Container.jsx";
import TeachersList from "../../components/TeachersList/TeachersList.jsx";
import {
  selectError,
  selectHasMoreItems,
  selectIsLoading,
  selectTeachersItem,
} from "../../redux/teachers/selectors.js";
import { useThemes } from "../../context/ThemesContext.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import Modal from "../../components/Modal/Modal.jsx";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";

const TeachersPage = () => {
  const { theme } = useThemes();
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachersItem);
  const isError = useSelector(selectError);
  const hasMoreItems = useSelector(selectHasMoreItems);
  const isLoading = useSelector(selectIsLoading);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [favorites, setFavorites] = useState([]);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (teachers.length === 0) {
      console.log("Fetching initial teachers...");
      dispatch(fetchTeachers({ limit: 4 }));
    }
  }, [teachers, dispatch]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleLoadMore = () => {
    const lastTeacher = teachers[teachers.length - 1];
    const lastKey = lastTeacher?.id;
    console.log("Load more clicked. Last teacher key:", lastKey);
    dispatch(fetchTeachers({ lastKey, limit: 4 }));
  };

  const toggleFavorite = (teacher) => {
    if (!isLoggedIn) {
      setModalType("register");
      return;
    }

    setFavorites((prev) =>
      prev.some((fav) => fav.id === teacher.id)
        ? prev.filter((fav) => fav.id !== teacher.id)
        : [...prev, teacher]
    );
  };

  const closeModal = () => setModalType(null);

  return (
    <main className="bg-[#f8f8f8] min-h-screen relative">
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
          <Loader />
        </div>
      )}
      <Container className="px-32 py-24">
        <section className="">
          {isError && (
            <p className="text-red-500">Error loading teachers... 😢</p>
          )}

          <TeachersList
            teachers={teachers}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
          {hasMoreItems && !isLoading && (
            <div className="flex justify-center items-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className={`font-bold text-lg leading-[1.56] px-12 py-4 rounded-xl ${theme.buttonBg}`}
              >
                {isLoading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
          <Modal
            isOpen={modalType === "register"}
            onClose={closeModal}
            title={modalType === "login" ? "Login" : "Register"}
          >
            <AuthForm type={modalType} onSubmit={closeModal} />
          </Modal>
        </section>
      </Container>
    </main>
  );
};

export default TeachersPage;
