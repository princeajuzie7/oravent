"use client";
import { Carousel } from "@material-tailwind/react";
import CustomButton from "../button/CustomButton";
import Event0 from "@/assets/images/zeals2-338.jpg";
import Event001 from "@/assets/images/zeals2-47.jpg";
import Event003 from "@/assets/images/zzeal27.jpg";
import Event004 from "@/assets/images/zeals69.jpg";
import Image from "next/image";
import Link from "next/link";
export default function AllCarousel() {
  const Data = [
    {image : Event0, id: 1},
    {image : Event001, id: 2},
    {image : Event003, id: 3},
    {image : Event004, id: 4}
  ]
  const Event = "Contact Us"
  return (
    <div className=" relative scroll-smooth" style={{ height: "calc(100vh - 9.625vh)" }}>
      <div className="absolute z-30 top-0 bg-black/40 h-[inherit] w-full text-[white]  flex items-center px-10 lg:pl-12">
      <div class="text-left ltr:sm:text-left rtl:sm:text-right gap- w-fit flex flex-col ">
      <h2 class="text-3xl font-bold text-white sm:text-4xl md:text-5xl ">
        Best Events Experience
      </h2>

      <p
        class=" max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Transforming Dreams into Breathtaking Realities... <br /> Elevate your events with our exquisite interior and exterior decorations. 
        Your vision, our expertise... Unleash the magic of unforgettable moments!.
      </p>

      <div class="mt-4 sm:mt-8">
      <Link href={"#Contact"}>
      
      <CustomButton Value={Event} color="white" variant="gradient" className="text-black bg-white"/>
      </Link>
      </div>
    </div>


      </div>
      <Carousel
        transition={{ duration: 1.5 }}
        autoplay={true}
        loop={true}
        prevArrow={false}
        nextArrow={false}
        navigation={false}
      >
        {Data.map((item)=>{
          return (
            <Image
            src={item.image}
            alt="image 1"
            className="h-full w-full object-cover"
          key={item.id} />
          )
        })}
  
   
      </Carousel>
    </div>
  );
}
