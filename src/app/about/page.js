import { FooterWithSitemap } from '@/components/Footer/Footer'
import { NavbarWithMegaMenu } from '@/components/Navbar/Navbar'
import AboutComponent from '@/components/about/AboutComponent'
import ContactComponent from '@/components/contact/ContactComponent'


export default function page() {
  return (
    <div>
        <NavbarWithMegaMenu/>
        <AboutComponent/>
        <hr className='text-gray-300 w-[full]'/>
        <ContactComponent/>
        <FooterWithSitemap/>
    </div>
  )
}
