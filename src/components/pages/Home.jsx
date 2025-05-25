import React from "react";
import BannerImg from "../../assets/banner-image.png";
import nameElement from "../../assets/name-element.png";
import { IoCallOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight, MdSlowMotionVideo } from "react-icons/md";
import Element from "../../assets/element1.png";
import AboutImg from "../../assets/customer.png";
import { TbHours24 } from "react-icons/tb";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { motion } from "framer-motion";

const Home = () => {
  const skills = [
    { name: "JavaScript", level: 75 },
    { name: "React Js", level: 80 },
    { name: "Next Js", level: 85 },
    { name: "Tailwind Css", level: 95 },
    { name: "UI/UX", level: 70 },
    { name: "Figma", level: 50 },
    { name: "Adobe XD", level: 85 },
  ];

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <>
      <header className="bg-[#191919] w-full h-[640px] -mt-20 overflow-hidden">
        <div className="w-3/4 h-[100%] mt-20 mx-auto flex items-center justify-between">
          <div className="max-w-[50%]">
            <p className="text-xl mb-2">
              Hello I'<span className="text-primaryColor">am</span>
            </p>
            <h1 className="text-6xl font-semibold">
              Ridoy Howlader{" "}
              <span className="text-primaryColor font-secondaryFont font-light">
                Abir
              </span>
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
            <img
              className="absolute top-[240px] right-[580px] w-[480px]"
              src={Element}
              alt=""
            />
            <img
              className="absolute top-[400px] right-[540px] w-[300px]"
              src={Element}
              alt=""
            />
            <img
              className="absolute top-[380px] right-[460px] w-[220px]"
              src={Element}
              alt=""
            />
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
          <div className="bg-[#191919] border border-primaryColor rounded-xl md:flex items-center md:justify-around py-8">
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
              <p className="text-lg text-primaryColor border-b-2 w-1/6 border-primaryColor mb-5 text-nowrap">
                ABOUT ME
              </p>
              <h2 className="text-4xl font-semibold leading-relaxed">
                Designing Success One <br />
                Project at a Time
              </h2>
              <p className="text-sm text-gray-400 mt-4">
                Financial planners help to gain knowledge aboutw toio invest and
                save their
                <br /> money in the most efficient way ever. many people all of
              </p>
              <div className="flex gap-x-16 mt-5">
                <div>
                  <p className="text-lg flex items-center">
                    <MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" />{" "}
                    Web Design
                  </p>
                  <p className="text-lg flex items-center">
                    <MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" />{" "}
                    Product Design
                  </p>
                </div>
                <div>
                  <p className="text-lg flex items-center">
                    <MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" />{" "}
                    UI/Ux Design
                  </p>
                  <p className="text-lg flex items-center">
                    <MdKeyboardDoubleArrowRight className="mr-2 text-3xl text-primaryColor" />{" "}
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-x-14">
                <button className="text-lg py-2 px-4 border border-primaryColor rounded-xl">
                  Hire Me +
                </button>
                <div className="flex items-center gap-x-2">
                  <p className="flex items-center">
                    <IoCallOutline className="text-5xl text-primaryColor" />
                    <TbHours24 className="text-4xl text-primaryColor" />
                  </p>
                  <div>
                    <p className="text-sm mb-2 text-gray-300">Need help ?</p>
                    <p className="text-xl font-semibold">(369)007-7339</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[480px] h-[360px] rounded-xl"
                src={AboutImg}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Education And skill section */}
        <section className="w-3/4 mx-auto mt-[80px]">
          <div className="font-primaryFont text-center">
            <div className="flex justify-center items-center gap-x-2">
              <TfiLayoutLineSolid className="text-4xl text-primaryColor" />
              <p className="text-lg text-primaryColor">
                EDUCATION & Experience
              </p>
              <TfiLayoutLineSolid className="text-4xl text-primaryColor" />
            </div>
            <h2 className="text-4xl text-center leading-relaxed font-semibold">
              Designing My Story One
              <br />
              Project at a Time
            </h2>
          </div>
          <div className="font-primaryFont flex gap-x-24 mt-14">
            {/* Education */}
            <div className="">
              <p className="text-xl font-semibold mb-8 border-b-2 border-primaryColor w-[120px] text-primaryColor">
                Education :
              </p>
              <div className="relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2005-2008</p>
                <p className="text-lg font-semibold">
                  Diploma in Computer Technology
                </p>
                <small>Barishal Polytechnic</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="mt-6 relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2010-2013</p>
                <p className="text-lg font-semibold">Bsc In Cse</p>
                <small>UIU University</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="mt-6 relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2014-2016</p>
                <p className="text-lg font-semibold">MSC</p>
                <small>UIU University</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>

            <div className="border-r border-primaryColor"></div>
            {/* Experience */}
            <div>
              <p className="text-xl font-semibold mb-8 border-b-2 border-primaryColor w-[130px] text-primaryColor">
                Experience :
              </p>
              <div className="relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2017-2019</p>
                <p className="text-lg font-semibold">Jr: Web Developer</p>
                <small>Creative It Institute</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="mt-6 relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2020-2022</p>
                <p className="text-lg font-semibold">Sr: Web Developer</p>
                <small>Creative It Institute</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="mt-6 relative group cursor-pointer">
                <p className="font-semibold text-primaryColor">2023-2024</p>
                <p className="text-lg font-semibold">Team Leader</p>
                <small>Creative It Institute</small>
                <p className="mt-2 text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu
                </p>
                <span class="absolute left-0 -bottom-1 w-0 h-[1px] bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </section>

        {/* My Best Skill section */}
        <section className="bg-[#191919] mt-[80px] py-12">
          <section className="w-3/4 mx-auto font-primaryFont">
            <p className="text-lg text-primaryColor flex items-center">
              My Best Skill{" "}
              <TfiLayoutLineSolid className="text-4xl text-primaryColor ml-2" />
            </p>
            <h2 className="text-4xl font-semibold leading-relaxed">
              Growing professionally
              <br />
              exceeding expected
            </h2>
            <p className="text-base text-gray-300 mt-3">
              Financial planners help to gain knowledge aboutw toio invest and{" "}
              <br />
              save their money in the most efficient way ever.
            </p>
            {/* skill gain */}
            <div>
              <div className="mt-8 space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="bg-gray-800 h-2 rounded">
                      <motion.div
                        className="bg-primaryColor h-2 rounded"
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                        variants={barVariants}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
