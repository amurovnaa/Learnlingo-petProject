import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button/Button";
import { useThemes } from "../../context/ThemesContext";

export const bookingSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  reason: yup.string().required("Please select a reason"),
});

const BookingForm = ({ teacher, onSubmit }) => {
  const { theme } = useThemes();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      reason: "Career and business",
    },
  });
  const handleBook = (data) => {
    console.log("Booking submitted:", data);
    onSubmit;
  };
  const submitHandler = (data) => {
    handleBook({ ...data, teacher });
  };

  return (
    <div>
      <p className="font-normal text-base leading-[1.37] text-[rgba(18,20,23,0.8)] mb-5">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="flex items-center gap-[14px] mb-10">
        <img
          src={teacher.avatar_url}
          alt={teacher.name}
          className="w-11 h-11 rounded-full"
        />
        <div>
          <span className="font-medium text-xs leading-[1.33] text-[#8a8a89]">
            Your teacher
          </span>
          <p className="font-medium text-base leading-normal">
            {teacher.name} {""}
            {teacher.surname}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <p className="font-medium text-2xl leading-[1.33] mb-5">
            What is your main reason for learning English?
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {[
              "Career and business",
              "Lesson for kids",
              "Living abroad",
              "Exams and coursework",
              "Culture, travel or hobby",
            ].map((reason) => (
              <label
                key={reason}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={reason}
                  {...register("reason")}
                  className="peer hidden"
                />
                <span
                  className="relative w-6 h-6 flex items-center justify-center
      border-2 rounded-full
      peer-checked:border-[var(--color)] 
      
      
      peer-checked:before:w-3 peer-checked:before:h-3
      peer-checked:before:rounded-full
      peer-checked:before:bg-[var(--color)]
      transition duration-200"
                  style={{ "--color": theme.mainColor }}
                ></span>
                <span className="font-normal text-base leading-[1.37]">
                  {reason}
                </span>
              </label>
            ))}
          </div>
          {errors.reason && (
            <p className="text-red-500 text-sm">{errors.reason.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-center gap-[18px] mb-10">
          <div className="w-full">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder="Phone number"
              {...register("phone")}
              className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center w-full py-4"
        >
          Book
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
