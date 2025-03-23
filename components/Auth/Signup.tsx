"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithGoogle, signInWithGithub, logout } from "@/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const Signup = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Create dynamic dashboard path (you can modify this logic)
        const userId = currentUser.uid; // Use UID for unique dashboards
        router.push(`/dashboard/${currentUser.uid}`); // Redirect to dynamic dashboard
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return (
    <>
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top flex justify-center rounded-lg bg-white py-2.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:py-5"
          >
            <h1 className="text-xl">
              {user
                ? `Welcome, ${user.displayName || "User"}!`
                : "Register or login to an existing account"}
            </h1>
          </motion.div>

          {!user ? (
            <div className="flex items-center gap-8">
              <button
                onClick={signInWithGoogle}
                className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
              >
                Login with Google
              </button>

              <button
                onClick={signInWithGithub}
                className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
              >
                Login with GitHub
              </button>
            </div>
          ) : (
            <button
              onClick={logout}
              className="mt-4 w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Signup;
