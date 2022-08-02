import React from "react";

const AboutUs = () => {
  return (
    <div className="my-32 px-5 max-w-[1200px] m-auto">
      <h3 className="text-center font-bold text-3xl sm:text-2xl">
        Trusted by developers across the world
      </h3>
      <p className="text-2xl max-w-[700px] min-w-[280px] m-auto text-center sm:text-2xl py-5 text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
        asperiores earum placeat veritatis dignissimos itaque.
      </p>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        <div className="px-3 py-14 rounded-lg text-center border shadow-xl">
          <p className="text-5xl pb-3 font-bold text-indigo-600">100%</p>
          <p className="text-xl  text-gray-400">Completion</p>
        </div>
        <div className="px-3 py-14 rounded-lg text-center border shadow-xl">
          <p className="text-5xl pb-3 font-bold text-indigo-600">24/7</p>
          <p className="text-xl  text-gray-400">Delivery</p>
        </div>
        <div className="px-3 py-14 rounded-lg text-center border shadow-xl">
          <p className="text-5xl pb-3 font-bold text-indigo-600">100K</p>
          <p className="text-xl  text-gray-400">Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
