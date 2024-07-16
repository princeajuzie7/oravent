"use client";
import { useEffect,useState,useRef } from "react";
import { NavbarWithMegaMenu } from "@/components/Navbar/Navbar";
import { FooterWithSitemap } from "@/components/Footer/Footer";
import CustomButton from "@/components/button/CustomButton";
// ... (your existing imports)
import { FaPlay, FaPause,  } from 'react-icons/fa';

// Custom Video Player Component
const VideoPlayer = ({ mediaUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  


  return (
    <div className="relative">
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        loop
        playsInline
        className="object-cover rounded-t-lg"
        controls={false}
   
      >
        <source src={mediaUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center ">
        {/* Add custom controls here */}
        {isPlaying ? (
          <FaPause onClick={togglePlay} className="text-white/50 hover:text-white/70 text-[60px] cursor-pointer" />
        ) : (
          <FaPlay onClick={togglePlay} className="text-white/50 hover:text-white/70  text-[60px]  cursor-pointer" />
        )}
        {/* Custom volume control */}
      </div>
    </div>
  );
};

export default function Page() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  async function getStaticProp() {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,thumbnail_url,permalink,username&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;

    const Data = await fetch(url);
    const data = await Data.json();
    setData(data);
    setLoading(false)
    console.log("AllData", data);
  }

  useEffect(() => {
    getStaticProp();
  }, []);


  useEffect(() => {
    // Log media_type for each item
    data.data && data.data.forEach((item) => console.log(item.media_type));
  }, [data]);

  return (
    <div>
      {/* navbar  */}
      <NavbarWithMegaMenu />

      {/* All socials  */}
      <div className="flex items-center justify-center flex-col bg-[#f2f2f7] gap-10 py-10">
        
        {loading ? 
           <>
           
             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl w-[18rem] rounded-lg h-10 animate-pulse bg-gray-700 "></h2>
          <ul className="items-center grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 px-4 w-full ">
           
              {Array.from({length : 9}, (_,index)=>{
                return(
                  <li key={index} className="animate-pulse bg-gray-700 h-[80vh] rounded-xl shadow-md
                  ">
                  
                  </li>
                )
              })}
          
          </ul>
           </>
        : 
        <>
        
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-[cursive]">Instagram Feeds</h2>
        <main
        className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 px-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, fit-content)',
          gridAutoFlow: 'dense',
        }}
      >
        
        {data.data &&
          data.data.map((info) => (
            <div
              key={info.id}
              className="relative flex lg:max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                {info.media_type === "IMAGE" || info.media_type === "CAROUSEL_ALBUM"  ? (
                  <img src={info.media_url} alt="ui/ux review check" className="w-full h-full object-cover rounded-t-lg" />
                ) : 
                  <VideoPlayer mediaUrl={info.media_url} /> 
                }
              </div>
              <div className="p-6">
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  {info.timestamp.slice(0, 10)}
                </p>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700 text-ellipsis whitespace-nowrap overflow-hidden ">
                  {info.caption}
                </p>
              </div>
            </div>
          ))}
      </main>
        </>
        
      
        }
      </div>

      {/* footer   */}
      <FooterWithSitemap />
    </div>
  );
}
