"use client"
import { Carousel } from "@material-tailwind/react";
export default function AllCarousel() {
  return (
        <div className=" relative  " style={{ height: 'calc(100vh - 9.625vh)' }}>
    <div className="absolute z-30 top-0 bg-black/50 h-[inherit] w-full">
   <button className="h-[20px] w-[full] py-4 bg-cyan-200 rounded-lg px-8 flex items-center justify-center text-center">Hello world</button>
      </div>
      <Carousel
     
        transition={{ duration: 1.5 }}
        autoplay={true}
        loop={true}
        prevArrow={false}
        nextArrow={false}
        navigation={false}
      >
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
       
     
    </div>
  );
}
