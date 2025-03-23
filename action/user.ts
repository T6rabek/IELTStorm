"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

const login = async (FormData: FormData) => {
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;

  if (!email || !password) {
    return "Please enter both email and password.";
  }

  try {
    const result = await signIn("credentials", {
      redirect: false, // Important to prevent automatic redirection
      email,
      password,
    });

    if (!result || result.error) {
      console.error("Login error:", result?.error);
      return result?.error || "Invalid email or password.";
    }

    return { success: true, redirectUrl: "/dashboard" };
  } catch (error) {
    console.error("Login error:", error);
    return "An unexpected error occurred. Please try again.";
  }
};

const register = async (FormData: FormData) => {
  const firstName = FormData.get("firstName") as string;
  const lastName = FormData.get("lastName") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required.");
  }

  try {
    await connectDB();
  } catch (error) {
    throw new Error("Database connection failed. Please try again later.");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("This email is already registered. Try logging in.");
  }

  const hashedPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashedPassword });

  redirect("/dashboard");
};

export { register, login };
