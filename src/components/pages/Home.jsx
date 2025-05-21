import React from "react";
import BannerImg from "../../assets/banner-image.png";
import nameElement from "../../assets/name-element.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdSlowMotionVideo } from "react-icons/md";
import Element from "../../assets/element1.png"

const Home = () => {
  return (
    <div>
      <header className="bg-[#191919] w-full h-[700px] -mt-20">
        <div className="w-3/4 h-[100%] mx-auto flex items-center justify-between">
          <div className="max-w-[50%]">
            <p className="text-xl mb-2">
              Hello I'<span className="text-primaryColor">am</span>
            </p>
            <h1 className="text-6xl font-semibold">
              Ridoy Howlader <span className="text-primaryColor">Abir</span>
            </h1>
            <img
              className="w-[280px] h-auto absolute top-[220px] left-[555px]"
              src={nameElement}
              alt=""
            />
            <h3 className="text-2xl mt-8 mb-3">Web Designer</h3>
            <p className="text-base w-10/12 text-gray-300">
              Financial planners help to gain knowledge about to invest and save
              their money in the most efficient
            </p>
            <div className="mt-4 mb-4">
              <p className="mb-2 flex items-center">
                <IoCheckmarkCircleOutline className="text-primaryColor mr-2" />{" "}
                Achieve Excellence Academy
              </p>
              <p className="flex items-center">
                <IoCheckmarkCircleOutline className="text-primaryColor mr-2" />{" "}
                Pathway to success Coaching
              </p>
            </div>
            <img className="absolute top-[320px] right-[580px] w-[480px]" src={Element} alt="" />
            <div className="flex gap-x-8">
              <button className="bg-primaryColor py-2 px-4 text-gray-800 font-primaryFont font-semibold rounded-lg">
                Hire Me +
              </button>
              <div className="flex gap-x-2 cursor-pointer">
                <MdSlowMotionVideo className="text-5xl text-orange-300" />
                <button className="text-lg">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img
              className="max-w-[880px] h-auto object-contain"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
