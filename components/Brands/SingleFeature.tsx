import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  if (!feature) return null; // Prevents crashes if feature is undefined

  const { title, description, icon: Icon, id } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: id ? id * 0.1 : 0 }} // Ensures no crash
      viewport={{ once: true }}
      className="rounded-lg border p-5 text-center dark:border-gray-700"
    >
      <Icon className="mx-auto mb-4 h-12 w-12 text-blue-500" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default SingleFeature;
