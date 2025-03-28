import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description } = feature; // Extract Icon properly

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        {/* ✅ Add icon at the top */}
        <Icon className="h-12 w-12 text-primary dark:text-white" />

        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
