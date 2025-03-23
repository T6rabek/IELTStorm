import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/firebase"; // Ensure you have your Firebase initialized properly

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showInfo, setShowInfo] = useState(false); // State to toggle the visibility of user info

  // Get user information from Firebase onAuthStateChanged
  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the state with user information
        setUser(user);
      } else {
        // User is not signed in, reset the state
        setUser(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Toggle visibility of user info
  const handleClick = () => {
    setShowInfo(!showInfo); // Toggle the state to show or hide the user info
  };

  return (
    <div className="profile-container h-[20px] w-[20px] rounded-full bg-black dark:bg-slate-50">
      {user ? (
        <div>
          <button onClick={handleClick}>
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              className="user-avatar rounded-full"
            />
          </button>

          {/* Conditionally render user info */}
          {showInfo && (
            <div className="user-info bg-black/ 10-5 inline-block translate-x-[-90px] border border-black/10 dark:border-white/10 dark:bg-white/10">
              <h2>{user.displayName}</h2>
              <p>Email: {user.email}</p>
              {/* Add any other user details you need */}
            </div>
          )}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
