import TeacherCard from "../TeacherCard/TeacherCard";

const TeachersList = ({ teachers, onToggleFavorite, favorites }) => {
  return (
    <>
      <ul
        className="
          flex flex-col gap-6 mb-12
          xl:gap-8 xl:items-center xl:mb-16
        "
      >
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
