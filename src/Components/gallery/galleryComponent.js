"use client";
import Link from "next/link";
import CustomButton from "../button/CustomButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function GalleryComponent() {
  const pathname = usePathname();
  const [sizes, setSizes] = useState(
    typeof window !== "undefined" ? window.innerWidth > 959 : false
  );
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 959) {
          setSizes(true);
        } else {
          setSizes(false);
        }
      }
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const galleryData = [
    {
      id: 1,
      category: "Party",
      imageUrl: "/zeals69.jpg",
    },
    {
      id: 2,
      category: "Wedding",
      imageUrl: "/zeals2-47.jpg",
    },
    {
      id: 3,
      category: "Exquisite",
      imageUrl: "/zzeal27.jpg",
    },
    {
      id: 4,
      category: "Fabulous",
      imageUrl: "/zzeal16.jpg",
    },
    {
      id: 5,
      category: "Unique",
      imageUrl: "/zeals103.jpg",
    },
    {
      id: 6,
      category: "Perfect",
      imageUrl: "/zeals2-49.jpg",
    },
  ];

  const Text = "More";
  return (
    <div className="">
      <div className="bg-white dark:bg-gray-800 h-full  py-6 sm:py-8 lg:py-12 px-3 lg:px-7 ">
        <div className="mx-auto max-w-screen-2xl lg:px-4 md:px-2">
          {pathname === "/" ? (
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                  Gallery
                </h2>

                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>

              <Link href="/gallery">
                <CustomButton
                  Value={Text}
                  variant="outlined"
                  className="px-4 py-2 md:px-8 md:py-3 md:text-base dark:bg-gray-700 dark:border-none transition duration-100"
                />
              </Link>
            </div>
          ) : (
            <div className="mb-4 flex  items-center justify-center gap-8 sm:mb-8 md:mb-12">
              <div className="flex flex-col items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                  Gallery
                </h2>
              </div>
            </div>
          )}

          {sizes === true ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="/zeals69.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 object-cover"
              >
                <img
                  src="/zeals2-47.jpg"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="/zzeal27.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="zzeal16.jpg"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>


              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:gap-8">
              {galleryData.map((item) => (
                <LightGallery
                  plugins={[lgZoom]}
                  mode="lg-fade"
                  key={item.id}
                  animation={false}
                  zoomFromOrigin={false}
                >
                  <a
                    data-lg-size="1406-1390"
                    className="gallery-item group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                    data-src={item.imageUrl}
                    data-sub-html={item.category}
                  >
                    <img className="img-responsive" src={item.imageUrl} />
                  </a>
                </LightGallery>
                // <a

                //   href="#"
                //   className=""
                // >
                //   <img

                //     loading="lazy"
                //     alt={`Photo by ${item.category}`}
                //     className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                //   />

                //   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                //   <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">

                //   </span>
                // </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
