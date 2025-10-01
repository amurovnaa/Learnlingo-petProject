import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button/Button.jsx";

const schemas = {
  login: yup.object({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  }),
  register: yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  }),
};

const AuthForm = ({ type = "login", onSubmit }) => {
  const schema = schemas[type];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      {type === "register" && (
        <p className="font-normal text-base leading-[1.37] text-[rgba(18,20,23,0.8)] mb-10">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      )}
      {type === "login" && (
        <p className="font-normal text-base leading-[1.37] text-[rgba(18,20,23,0.8)] mb-10">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="w-full flex flex-col items-center gap-[18px] mb-10">
          {type === "register" && (
            <div className="w-full">
              <input
                {...register("name")}
                placeholder="Name"
                className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          )}

          <div className="w-full">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="font-normal text-base leading-[1.37] text-[#121417] placeholder-[#121417] w-full max-h-[54px] border pl-[18px] py-4 rounded-xl border-solid border-[rgba(18,20,23,0.1)]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full text-black py-4">
          {type === "login" ? "Log In" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
