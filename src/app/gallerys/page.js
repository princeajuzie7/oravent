"use client";
// import { FooterWithSitemap } from '@/components/Footer/Footer'
import { FooterWithSitemap } from "@/components/Footer/Footer";
import { NavbarWithMegaMenu } from "@/components/Navbar/Navbar";
import GalleryComponent from "@/components/gallery/GalleryComponent";
import GalleryComp2 from "@/components/gallery/GlleryComp2";

export default function Page() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <GalleryComponent />

      <GalleryComp2 />
      <hr className="text-gray-300 w-full" />

      <FooterWithSitemap />
    </div>
  );
}
