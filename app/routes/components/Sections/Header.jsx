import React from "react";
// Components
import FullButton from "../../Buttons/FullButton";
// Assets
import HeaderImage from "./assets/img/header-img.png";

export default function Header() {
  return (
    <section id="home" className="pt-20 w-full min-h-[840px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full text-center lg:text-left mb-12 lg:mb-0">
        <h1 className="font-extrabold text-5xl text-gray-900">Forum des associations franco-italiennes</h1>
        <p className="font-semibold text-sm my-6 max-w-lg mx-auto lg:mx-0">
          Découvrez le prochain forum des associations italiennes et son programme.
        </p>
        <div className="max-w-[190px] mx-auto lg:mx-0">
          <FullButton title="Get Started" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full relative flex justify-end lg:justify-center mt-8 lg:mt-0">
        <div className="relative z-10">
          <img className="rounded-xl" src={HeaderImage} alt="office" />
          <div className="absolute left-0 bottom-12 max-w-[330px] p-8 bg-black bg-opacity-50 text-white rounded-lg z-20">
            <div className="absolute left-[-20px] top-[-10px]">
              {/* Icon placeholder */}
            </div>
            <div>
              <p className="text-lg italic">"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."</p>
              <p className="text-sm text-orange-500 text-right mt-3">Ralph Waldo Emerson</p>
            </div>
          </div>
          <div className="absolute right-[-100px] bottom-[100px] z-2 hidden lg:block">
            {/* Dots placeholder */}
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-[700px] bg-gray-200"></div>
      </div>
    </section>
  );
}
