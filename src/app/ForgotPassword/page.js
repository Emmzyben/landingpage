"use client";
import React from "react";
import Link from "next/link";
import "@/styles/styles.css";
import { useForm } from "react-hook-form";
import axiosInstance from "@/lib/axios";
import Image from 'next/image';

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("form data", data);

    axiosInstance
      .post("auth/forgotPassword", data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div>
        <Link href='/home'>
        <Image
          src="/Logo.jpg"
          width={70}
          style={{ marginLeft: "10%", marginTop: "10px", paddingRight: "10px" }}
         height={100}
        alt="see"
        />
        </Link>

        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md mt-6">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#001233]">
              Forgot Password
            </h2>
            <div className="mt-5 text-center text-sm font-medium leading-6 text-[#001233]">
              <p>
                Enter your email we will send you a link to reset your password.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-[#001233]"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="Email"
                      autoComplete="email"
                      required
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#001233] focus:ring-[#001233] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Enter email"
                      {...register("email")}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#FF595A] px-3 py-1.5 text-sm font-bold leading-6 text-[white] shadow-sm hover:bg-[#fe5000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001233]"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
