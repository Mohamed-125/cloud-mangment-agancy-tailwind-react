import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
const Support = () => {
  return (
    <div
      className={` relative before:content-[""] before:absolute before:-z-10 before:bg-support-img before:brightness-[.3] before:top-0 before:w-full before:h-[700px] before:bg-cover my-32 before:bg-center  b  `}
    >
      <div className=" m-auto max-w-[1200px] h-full">
        <h3 className="text-slate-300 py-7 pt-20 px-5 text-center text-6xl ">
          Support
        </h3>
        <h4 className="text-5xl text-center font-bold text-white">
          Finding the right team
        </h4>
        <p className="text-2xl text-slate-300 my-3  py-6 px-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae veritatis ratione error tenetur, voluptates architecto
          possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
          et cum vel?
        </p>

        {/*  cards  */}
        <div className="grid  md:gap-16 gap-5 md:grid-cols-1 mt-7 grid-cols-3">
          <div className="bg-white shadow-xl rounded-lg flex-col py-11 md:pb-20 px-5 relative border ">
            <PhoneIcon className="w-[50px] bg-indigo-600 absolute -top-[27px] rounded-lg box-border p-2  text-white" />
            <div>
              <p className="text-2xl font-bold my-4">Sales</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <a className="flex gap-1 font-bold text-xl items-end mt-5 md:bg-zinc-200 md:w-full md:absolute bottom-0 left-0 md:py-3 md:px-5 text-indigo-600 ">
              Contact us <ArrowSmRightIcon className="w-[24px]" />
            </a>
          </div>

          <div className="bg-white shadow-xl rounded-lg flex-col py-11 md:pb-20 px-5 relative border ">
            <SupportIcon className="w-[50px] bg-indigo-600 absolute -top-[27px] rounded-lg box-border p-2  text-white" />
            <div>
              <p className="text-2xl font-bold my-4">Technical Support</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <a className="flex gap-1 font-bold text-xl items-end mt-5 md:bg-zinc-200 md:w-full md:absolute bottom-0 left-0 md:py-3 md:px-5 text-indigo-600 ">
              Contact us <ArrowSmRightIcon className="w-[24px]" />
            </a>
          </div>

          <div className="bg-white shadow-xl rounded-lg flex-col py-11 md:pb-20 px-5 relative border ">
            <ChipIcon className="w-[50px] bg-indigo-600 absolute -top-[27px] rounded-lg box-border p-2  text-white" />
            <div>
              <p className="text-2xl font-bold my-4">Media Inquiries</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <a className="flex gap-1 font-bold text-xl items-end mt-5 md:bg-zinc-200 md:w-full md:absolute bottom-0 left-0 md:py-3 md:px-5 text-indigo-600 ">
              Contact us <ArrowSmRightIcon className="w-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
