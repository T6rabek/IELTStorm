"use client";
import React from "react";
import SingleFeature from "./SingleFeature"; // Updated from SingleBrand
import featureData from "./FeatureData"; // Updated from brandData

const Features = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12.5 xl:gap-29">
            {featureData.map((feature, key) => (
              <SingleFeature key={key} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Features;
