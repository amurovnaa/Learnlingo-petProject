import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import TeachersList from "../../components/TeachersList/TeachersList";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleRemoveFavorite = (teacherId) => {
    const updated = favorites.filter((t) => t.id !== teacherId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="bg-[#f8f8f8] min-h-screen py-12">
      <Container className="px-6 md:px-12 lg:px-32">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            You don’t have any favorite teachers yet ❤️
          </p>
        ) : (
          <TeachersList
            teachers={favorites}
            favorites={favorites}
            onToggleFavorite={(teacher) => handleRemoveFavorite(teacher.id)}
          />
        )}
      </Container>
    </main>
  );
};

export default FavoritesPage;
