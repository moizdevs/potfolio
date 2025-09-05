import React from "react";
import Image from "next/image";

const MyWork = () => {
  return (
    <>
      <div>
        <div className="flex flex-col m-auto p-auto">
          <h1 className="flex py-5 px-5 mx-auto font-bold text-4xl text-center text-white">
            My Works
          </h1>
          <div className="work-scroll horizontal-scroll w-5/6 m-auto flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-7 md:ml-20 gap-x-5">
              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/video-player.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Video Player App like YouTube
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/dentist-website.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Dentist Application UI (html,css)
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/passop.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Passwords Saver (local storage)
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/todo-app.jpg"
                    alt=""
                    height={143}
                    width={318}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Task Saver (local storage-ReactJs)
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/twitter-clone.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Twitter Clone With UI only (NodeJs)
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/spotify-clone.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Music Player App like spotify
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-80 bg-[#120f19] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/get-me-chai.jpg"
                    height={143}
                    width={318}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-white mb-2 text-2xl font-bold tracking-tight">
                      Funding App (with payment integration)
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#422E71] rounded-lg hover:bg-[#4d2e71] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWork;
