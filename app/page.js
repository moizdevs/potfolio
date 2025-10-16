"use client";
import Image from "next/image";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import FloatingDotsBackground from "./components/FloatingDotsBackground";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

export default function Home() {
  const [showLoading, setshowLoading] = useState(false);
  const downloadCV = () => {
    setshowLoading(true);

    // Simulate a delay before download starts
    setTimeout(() => {
      window.location.href = "/CV-Moiz.pdf";
      setshowLoading(false); // hide loader AFTER redirect
    }, 1500);
  };

  return (
    <>
      {showLoading && (
        <div className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center bg-[#29223a]/70">
          <TailSpin
            height="80"
            width="80"
            color="purple"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}

      <FloatingDotsBackground />
      <div className="flex h-[89vh] justify-evenly gap-x-4 max-[915px]:flex-col-reverse">
        <div className="w-full flex flex-col justify-center items-start pl-[6%] max-[915px]:items-center max-[915px]:text-center">
          <h1 className="text-white text-7xl font-semibold max-[915px]:text-3xl">
            I am Moiz <span className="text-[#422E71]">Rehman</span>
          </h1>
          <p className="text-[#a7acac] leading-[32px] text-2xl max-[915px]:text-xl">
            I am a Full Stack Mern web app developer
            <br />
            with at least 6 months of experience.
          </p>
          <button
            onClick={downloadCV}
            className=" max-[915px]:text-sm hover:cursor-pointer btn bg-[#422E71] hover:bg-[#4d2e71] text-white px-4 py-3 rou rounded-full mt-2"
          >
            Download CV
          </button>
          <div className="icons mt-3">
            <a href="https://www.linkedin.com/in/moiz-rehman-6674a5203/">
              <i className="hover:text-[#422E71] text-4xl max-[915px]:text-2xl pr-3 text-white fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/moiz.rehman.37604">
              <i className="hover:text-[#422E71] text-4xl max-[915px]:text-2xl pr-3 text-white fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="hover:text-[#422E71] text-4xl max-[915px]:text-2xl pr-3 text-white fab fa-twitter"></i>
            </a>
            <a href="https://wa.me/923157378892">
              <i className="hover:text-[#422E71] text-4xl max-[915px]:text-2xl pr-3 text-white fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/moizur36/">
              <i className="hover:text-[#422E71] text-4xl max-[915px]:text-2xl pr-3 text-white fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="imageCont h-64 w-64 max-[915px]:h-48 max-[915px]:w-48">
            <Image
              src="/profilepic.jpg"
              alt="Hero Image"
              width={280}
              height={280}
              className=" object-cover rounded-full border-4 border-gradient shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_10px_10px_#343D3F] transition-shadow duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="divider h-[1px] w-[80%] m-auto bg-gray-300"></div>
      <AboutSection />
      <div className="divider h-[1px] w-[80%] m-auto bg-gray-300"></div>
      <MyWork />
      <Footer />
    </>
  );
}
