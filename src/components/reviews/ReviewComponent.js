import { FaStar } from "react-icons/fa";

export default function ReviewComponent() {

    const ReviewsInfo = [
        {
           
            tittle: "“Spectacular! Oravent transformed my wedding venue into a dreamy wonderland. Every detail was perfection, leaving our guests in awe. Thank you for making our day truly magical!“",
      
            img : "https://st5.depositphotos.com/62604338/62457/i/600/depositphotos_624574132-stock-photo-young-black-man-standing-wearing.jpg",
            name: "Laila Bahar",
            work : "Designer"
        },
        {
           
            tittle: "“Exceptional service! You guys went above and beyond, exceeding our expectations. Their artistic touch and meticulous planning made our event a huge success. Professionalism at its best!“",
    
            img : "https://st3.depositphotos.com/12071432/17791/i/450/depositphotos_177916990-stock-photo-woman.jpg",
            name: "Favour Jude",
            work : "Designer"
        },
        {
           
            tittle: "“Artistic brilliance! Oravent elevated our corporate event with stunning decorations that perfectly aligned with our brand. Impeccable attention to detail left a lasting impression on clients. Highly recommended!“",
            img : "https://st5.depositphotos.com/6230312/62640/i/600/depositphotos_626401998-stock-photo-man-leadership-businessman-front-office.jpg",
            name: "Felix Mark",
            work : "CEO @elien"
        }
    ]
  return (
    <div>
      
<section className="bg-[#f2f2f7] lg:bg-[#f2f2f7]">

  <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-10 md:py-24 lg:py-32">

    <h2 className="mb-8 text-left lg:text-center text-3xl font-bold md:mb-14 md:text-5xl">What our clients are saying</h2>
 
    <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
      {/* <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis“</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li> */}
      {/* <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li>
      <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="text-base font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li> */}

{ReviewsInfo.map(({ tittle, img, name, work }) => (
  <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10 rounded-md" key={tittle}>
    <div className="flex">
      {/* Displaying 5 stars for each object */}
      {[...Array(5)].map((_, starIndex) => (
        <div className="mr-1.5 w-4  text-yellow-400" key={starIndex}>
        <FaStar />

        </div>
      ))}
    </div>
    <p className="text-[#647084]">{tittle}</p>
    <div className="flex">
      <img src={img} alt="" className="mr-4 h-16 w-16 rounded-[50%]  object-cover " />
      <div className="flex flex-col">
        <h6 className="font-bold">{name}</h6>
        <p className="text-sm text-[#636262]">{work}</p>
      </div>
    </div>
  </li>
))}


    </ul>

    <a href="#" className="flex justify-center font-bold text-black">Check all reviews</a>
  </div>
</section>
    </div>
  )
}
