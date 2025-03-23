"use client";
import MainDashboard from "@/components/Dashboard";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig"; // ✅ Import Firebase auth
import { onAuthStateChanged, User } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/signup");
      } else {
        setUser(currentUser);

        // Redirect to the correct user dashboard if the ID doesn't match
        if (id !== currentUser.uid) {
          router.replace(`/dashboard/${currentUser.uid}`);
        }
      }
    });

    return () => unsubscribe();
  }, [id, router]);

  if (!user) return <p>Loading...</p>;

  return <MainDashboard />;
};

export default Dashboard;
