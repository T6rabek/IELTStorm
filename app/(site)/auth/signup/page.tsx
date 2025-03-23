import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - iStorm",

  // other metadata
  description: "This is Sign Up page for iStorm",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
