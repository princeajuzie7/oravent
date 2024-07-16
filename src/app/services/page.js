import { FooterWithSitemap } from "@/components/Footer/Footer"
import { NavbarWithMegaMenu } from "@/components/Navbar/Navbar"
import ServicesComponent from "@/components/services/ServicesComponent"

export default function page() {
  return (
<div>
  <NavbarWithMegaMenu/>
  <ServicesComponent/>
  <hr className='text-gray-300 w-full'/>
    <FooterWithSitemap/>
</div>
  )
}
