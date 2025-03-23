"use client";

import {
  BookAIcon,
  HeadphonesIcon,
  HomeIcon,
  LanguagesIcon,
  ListCheckIcon,
  MicIcon,
  NotebookPenIcon,
  PenBoxIcon,
  PenIcon,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [activeBtn, setActiveBtn] = useState("home");

  const menuItems = [
    { id: "home", icon: <HomeIcon className="mr-1" />, label: "Home" },
    {
      id: "listening",
      icon: <HeadphonesIcon className="mr-1" />,
      label: "Listening",
    },
    { id: "reading", icon: <BookAIcon className="mr-1" />, label: "Reading" },
    { id: "writing", icon: <PenIcon className="mr-1" />, label: "Writing" },
    { id: "speaking", icon: <MicIcon className="mr-1" />, label: "Speaking" },
    {
      id: "vocabulary",
      icon: <ListCheckIcon className="mr-1" />,
      label: "Vocabulary",
    },
    {
      id: "dictionary",
      icon: <PenBoxIcon className="mr-1" />,
      label: "Dictionary",
    },
    {
      id: "translator",
      icon: <LanguagesIcon className="mr-1" />,
      label: "Translator",
    },
    {
      id: "mockExam",
      icon: <NotebookPenIcon className="mr-1" />,
      label: "Mock Exam",
    },
  ];

  return (
    <motion.main
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -250, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="mt-[70px] h-[calc(100vh-70px)] w-64 border border-black/10 bg-black/5 py-5 dark:border-white/10 dark:bg-white/5">
        {menuItems.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button
              onClick={() => setActiveBtn(item.id)}
              className={`mb-5 flex w-full rounded-sm px-3 py-1 text-black transition-all duration-75 ease-in-out 
                  ${
                    activeBtn === item.id
                      ? "bg-black/20 dark:bg-white/20"
                      : "hover:bg-black/10 dark:hover:bg-white/10"
                  } 
                  dark:text-slate-50`}
            >
              {item.icon} {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.main>
  );
};

export default Sidebar;
