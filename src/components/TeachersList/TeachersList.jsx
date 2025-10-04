import TeacherCard from "../TeacherCard/TeacherCard";

const TeachersList = ({ teachers, onToggleFavorite, favorites }) => {
  return (
    <>
      <ul className="flex flex-col gap-8 items-center mb-16">
        {teachers.map((teacher, idx) => (
          <TeacherCard
            key={idx}
            teacher={teacher}
            isFavorite={favorites.some((fav) => fav.id === teacher.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ul>
    </>
  );
};

export default TeachersList;
