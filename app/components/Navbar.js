"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  const sideBarRef = useRef();
  const overlayRef = useRef();

  const toggleSidebar = () => {
    const sidebar = sideBarRef.current;
    const overlay = overlayRef.current;
    const isClosed = sidebar.style.right === "-100%" || !sidebar.style.right;

    sidebar.style.right = isClosed ? "0" : "-100%";
    overlay.style.opacity = isClosed ? "1" : "0";
    overlay.style.pointerEvents = isClosed ? "auto" : "none";
  };

  return (
    <nav className="logo flex items-center justify-around bg-[#1f1a2c79] backdrop-blur-md max-[715px]:justify-between text-white p-4 shadow-md sticky top-0 z-20">
      <Image
        className="max-[915px]:w-16"
        width={120}
        height={120}
        src="/navbar.png"
        alt="Logo"
      />

      {/* Desktop Links */}
      <ul className="flex items-center justify-center gap-8 max-[715px]:hidden font-semibold">
        {["Home", "Blog", "Services", "About", "Contact"].map((item) => {
          const href =
            item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <li key={item}>
              <Link
                href={href}
                className={`transition-all duration-200 hover:text-[#a890ff] ${
                  pathName === href ? "border-b-2 border-b-[#a890ff]" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 max-[715px]:gap-2">
        <button className="bg-[#422E71] px-3 py-2 max-[715px]:hidden rounded-md font-semibold hover:bg-[#5b3a91] transition-colors">
          <Link href="#">Hire Me</Link>
        </button>

        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="w-8 h-8 flex items-center justify-center sidebar cursor-pointer hidden max-[715px]:flex hover:bg-[#422E71] rounded-md text-white font-semibold transition-colors"
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>
      </div>

      {/* Overlay (for dark blur background behind sidebar) */}
      <div
        ref={overlayRef}
        onClick={toggleSidebar}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-10"
      ></div>

      {/* Sidebar */}
      <div
        ref={sideBarRef}
        className="sidebar fixed top-0 right-[-100%] h-screen w-3/4 sm:w-2/5 bg-gradient-to-b from-[#1f1a2c] to-[#100b19] backdrop-blur-xl shadow-2xl border-l border-white/10 transition-all duration-500 ease-in-out z-20"
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="font-bold text-lg text-[#a890ff]">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-[#a890ff] text-2xl cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="flex flex-col items-center gap-8 pt-10 text-lg font-medium">
          {["Home", "Blog", "Services", "About", "Contact"].map((item) => {
            const href =
              item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <Link
                  onClick={toggleSidebar}
                  href={href}
                  className={`transition-all duration-300 hover:text-[#a890ff] ${
                    pathName === href
                      ? "text-[#a890ff] underline underline-offset-4"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center pt-12">
          <Link
            href="#"
            onClick={toggleSidebar}
            className="bg-[#422E71] hover:bg-[#5b3a91] transition-colors px-6 py-3 rounded-md font-semibold shadow-md"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
