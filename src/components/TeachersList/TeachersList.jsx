import TeacherCard from "../TeacherCard/TeacherCard.jsx";

const TeachersList = ({ teachers, onToggleFavorite, favorites }) => {
  return (
    <ul className="flex flex-col gap-8 items-center mb-16">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
          isFavorite={favorites.some((fav) => fav.id === teacher.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};

export default TeachersList;
