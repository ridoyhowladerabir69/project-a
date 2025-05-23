import React from "react";
import BannerImg from "../../assets/banner-image.png";
import nameElement from "../../assets/name-element.png";
import { IoCallOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight, MdSlowMotionVideo } from "react-icons/md";
import Element from "../../assets/element1.png"
import AboutImg from "../../assets/customer.png"
import { TbHours24 } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <header className="bg-[#191919] w-full h-[640px] -mt-20 overflow-hidden">
        <div className="w-3/4 h-[100%] mx-auto flex items-center justify-between">
          <div className="max-w-[50%]">
            <p className="text-xl mb-2">
              Hello I'<span className="text-primaryColor">am</span>
            </p>
            <h1 className="text-6xl font-semibold">
              Ridoy Howlader <span className="text-primaryColor font-secondaryFont font-light">Abir</span>
            </h1>
            <img
              className="w-[280px] h-auto absolute top-[180px] left-[555px]"
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
            {/* Banner Element */}
            <img className="absolute top-[240px] right-[580px] w-[480px]" src={Element} alt="" />
            <img className="absolute top-[400px] right-[540px] w-[300px]" src={Element} alt="" />
            <img className="absolute top-[380px] right-[460px] w-[220px]" src={Element} alt="" />
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
          {/* Hero Image */}
          <div className="w-[50%]">
            <img
              className="max-w-[880px] h-auto object-contain"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </header>

      {/* Main section Start */}
      <main className="mt-[80px]">
        {/* Achievements Counter Section */}
        <section className="w-3/4 mx-auto">
          <div className="border border-primaryColor rounded-xl md:flex items-center md:justify-around py-8">
            <div className="font-primaryFont">
              <p className="text-3xl font-semibold mb-2">200 +</p>
              <p>Team member</p>
            </div>
            <div className="border h-[80px] border-primaryColor"></div>
            <div className="font-primaryFont">
              <p className="text-3xl font-semibold mb-2">20 +</p>
              <p>Winning award</p>
            </div>
            <div className="border h-[80px] border-primaryColor"></div>
            <div className="font-primaryFont">
              <p className="text-3xl font-semibold mb-2">5K +</p>
              <p>Complete project</p>
            </div>
            <div className="border h-[80px] border-primaryColor"></div>
            <div className="font-primaryFont">
              <p className="text-3xl font-semibold">600 +</p>
              <p>Client review</p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="w-3/4 mx-auto mt-[80px] font-primaryFont">
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-lg text-primaryColor border-b-2 w-1/6 border-primaryColor mb-5 text-nowrap">ABOUT ME</p>
              <h2 className="text-4xl font-semibold leading-relaxed">Designing Success One <br />Project at a Time</h2>
              <p className="text-sm text-gray-400 mt-4">Financial planners help to gain knowledge aboutw toio invest and save their<br /> money in the most efficient way ever. many people all of</p>
              <div className="flex gap-x-16 mt-5">
                <div>
                  <p className="text-lg flex items-center"><MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" /> Web Design</p>
                  <p className="text-lg flex items-center"><MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" /> Product Design</p>
                </div>
                <div>
                  <p className="text-lg flex items-center"><MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" /> UI/Ux Design</p>
                  <p className="text-lg flex items-center"><MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" /> Web Developer</p>
                </div>
              </div>
              <div className="mt-6 flex gap-x-14">
                <button className="text-lg py-2 px-4 border border-primaryColor rounded-xl">Hire Me +</button>
                <div className="flex items-center gap-x-2">
                  <p className="flex items-center"><IoCallOutline className="text-5xl text-primaryColor" /><TbHours24 className="text-4xl text-primaryColor" /></p>
                  <div>
                    <p className="text-sm text-gray-300">Need help ?</p>
                    <p className="text-xl font-semibold">(369)007-7339</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="w-[480px] h-[360px] rounded-xl" src={AboutImg} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
