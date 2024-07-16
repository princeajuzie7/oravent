import { FooterWithSitemap } from '@/components/Footer/Footer';
import { NavbarWithMegaMenu } from '@/components/Navbar/Navbar'
import BookAppointment from '@/components/booking/BookAppointment';


export default function page() {
    return (
        <div>
            <NavbarWithMegaMenu/>
            <BookAppointment />
            <hr className='text-gray-300 w-full'/>
            <FooterWithSitemap/>
        </div>
    )
}
