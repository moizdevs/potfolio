import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Video Player App like YouTube",
    img: "/video-player.jpg",
    link: "#",
  },
  {
    title: "Dentist Application UI (HTML, CSS)",
    img: "/dentist-website.jpg",
    link: "#",
  },
  {
    title: "Passwords Saver (Local Storage)",
    img: "/passop.jpg",
    link: "#",
  },
  {
    title: "Task Saver (React Local Storage)",
    img: "/todo-app.jpg",
    link: "#",
  },
  {
    title: "Twitter Clone UI (Node.js)",
    img: "/twitter-clone.jpg",
    link: "#",
  },
  {
    title: "Music Player like Spotify",
    img: "/spotify-clone.jpg",
    link: "#",
  },
  {
    title: "Funding App (Payment Integration)",
    img: "/get-me-chai.jpg",
    link: "#",
  },
];

const MyWork = () => {
  return (
    <section className="relative py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        My Works
      </h1>

      <div className="horizontal-scroll w-5/6 mx-auto flex overflow-x-auto gap-6 pb-10 hide-scroll-bar snap-x snap-mandatory">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group relative w-80 flex-shrink-0 rounded-2xl overflow-hidden backdrop-blur-xl 
                       bg-gradient-to-b from-[#1b1528]/70 to-[#0d0912]/80 
                       shadow-[0_0_25px_rgba(105,0,255,0.15)] transition-all duration-500 
                       hover:shadow-[0_0_35px_rgba(155,60,255,0.45)] hover:scale-[1.03] snap-center"
          >
            <a href={proj.link} target="_blank" rel="noreferrer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-5">
                <h3 className="text-white text-xl font-semibold mb-3 leading-snug group-hover:text-[#c084fc] transition-colors">
                  {proj.title}
                </h3>

                <button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                             bg-gradient-to-r from-[#422E71] to-[#7b45d6] text-white text-sm font-medium
                             shadow-md hover:shadow-lg hover:from-[#4d2e71] hover:to-[#9b5df7]
                             transition-all duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 14 10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
