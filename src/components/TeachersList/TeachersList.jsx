import TeacherCard from "../TeacherCard/TeacherCard.jsx";

const TeachersList = ({ teachers, toggleFavorite, favorites }) => {
  return (
    <ul className="flex flex-col gap-8 items-center mb-16">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
          isFavorite={favorites.includes(teacher.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default TeachersList;
