"use client";
import { useState, useEffect } from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { usePrivy } from "@privy-io/react-auth";
import ParticlesBackground from "@/components/ParticleBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const { login } = usePrivy();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    login({ loginMethods: ["email", "sms"] });
  }, []);

  return (
    <>
      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen bg-black transition-all duration-1000">
          <div>
            <img
              src="https://edwin.finance/assets/images/finance-v.gif"
              alt="finance-v"
            />
            <img
              src="https://edwin.finance/assets/images/animation-loading.gif?cacheBuster=1737912197686"
              alt="loader-owl"
              className="mt-3"
            />
          </div>
        </div>
      ) : (
        <div className="relative h-screen w-screen overflow-hidden">
          <ParticlesBackground />
          <header>
            <div className="flex justify-between ">
              <div>
                <img
                  src="https://edwin.finance/assets/images/top-wave.png"
                  alt="top-wave"
                  className="lg:w-[54rem] md:w-[32rem]"
                />
              </div>
              <div>
                <img
                  src="https://edwin.finance/assets/images/rotating-bright-moon-xs.gif"
                  alt="moon"
                  className="lg:w-[8rem] md:w-[5rem] w-[5rem] lg:mr-24 lg:mt-12 md:mr-10 md:mt-6 mr-24 mt-12"
                />
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="absolute top-[25%] lg:left-[32%] md:left-[10%] left-[32%]">
            <div className="flex items-center justify-center">
              <div className="absolute md:-left-12 md:-mt-16 -left-32  top-30">
                <div className="lg:ml-6 md:ml-48 ml-6 lg:mt-0 md:mt-8 mt-0 lg:w-full md:w-[250px] w-full">
                  <h1 className="lg:text-6xl md:text-6xl text-3xl font-semibold bg-gradient-to-r from-[#423778] to-[#8d7557] text-transparent bg-clip-text">
                    Edwin
                  </h1>
                  <h1 className="lg:text-8xl md:text-7xl text-5xl font-semibold bg-gradient-to-r from-[#423778] to-[#8d7557] text-transparent bg-clip-text">
                    Hello,{" "}
                    <span className="bg-gradient-to-r from-[#8d7557] to-[#c6a33d] text-transparent bg-clip-text">
                      DeFAI
                    </span>
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-4 md:mt-10 lg:-ml-72 md:ml-36 -ml-12 mt-4">
                  <div className="bg-gray-200 rounded-full p-1 text-center py-1 px-1 cursor-pointer hover:bg-amber-100">
                    <TbBrandGithubFilled className="h-6 w-6 text-black" />
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 text-center cursor-pointer hover:bg-amber-100">
                    <FaDiscord className="h-6 w-6 text-black" />
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 text-center cursor-pointer hover:bg-amber-100">
                    <FaTelegramPlane className="h-6 w-6 cursor-pointer text-black" />
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 text-center py-1 px-1 cursor-pointer hover:bg-amber-100">
                    <BsTwitterX className="h-6 w-6 cursor-pointer text-black" />
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-12 ml-6 md:hidden">
                  <p className="text-white py-2 px-8 text-center border border-white rounded-full text-md font-semibold cursor-pointer">
                    DOCS
                  </p>
                  <p className="text-white py-2 px-8 text-center border border-white rounded-full text-md font-semibold cursor-pointer">
                    TOKEN
                  </p>
                </div>
              </div>
              <div className="lg:ml-[38rem] md:ml-[470px]  ml-40 lg:-mt-20 md:-mt-16  mt-10">
                <img
                  src="https://edwin.finance/assets/images/animation-character.gif"
                  alt="animated-owl"
                  className="w-24 md:w-auto "
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer>
            <div className="absolute md:flex items-center gap-8 bottom-8 left-8 hidden">
              <p className="text-white py-2 px-10 text-center border border-white rounded-full text-lg font-semibold cursor-pointer">
                DOCS
              </p>
              <p className="text-white py-2 px-10 text-center border border-white rounded-full text-lg font-semibold cursor-pointer">
                TOKEN
              </p>
            </div>
            <div className="flex justify-between items-center absolute bottom-0 right-0">
              <div>
                <img
                  src="https://edwin.finance/assets/images/bottom-wave.png"
                  alt="bottom-wave"
                  className="lg:w-[40rem] md:w-[30rem] md:h-[auto]  h-[15rem]"
                />
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
