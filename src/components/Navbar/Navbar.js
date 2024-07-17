"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/assets/svg/Logo.png";
import Image from "next/image";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CustomButton from "@/components/button/CustomButton";

function NavList() {
  // All Navbar list
  const items = [
    { text: "Home", id: "/" },
    { text: "About", id: "about" },
    { text: "Contact", id: "#Contact" },
    { text: "Services", id: "services" },
    { text: "Gallery", id: "gallery" },
    { text: "Socials", id: "socials" },
  ];

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {items.map((data) => {
        // dispalying the nav list
        return (
          <Typography
            as="a"
            href={data.text === "Home" ? "/" : `/${data.id} `}
            variant="small"
            color="blue-gray"
            className="font-medium flex"
            key={data.id}  >
            <ListItem
              className="flex items-center gap-2 py-3 pr-4"

            >
              {data.text}
            </ListItem>



          </Typography>
        );
      })}
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const route = useRouter();
  const click = () => {
    route.push('/book')
  }
  const [openNav, setOpenNav] = useState(false);
  const contact = "Event Appointment";
  useEffect(() => {
    // media query
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto rounded-none pl-3 pr-6 lg:pr-14 lg:pl-8 py-2 sticky top-0  z-[999] bg-white" fullWidth={true} blurred={false}>
      <div className="flex items-center justify-between text-blue-gray-900">

        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Image src={Logo} alt="" width={100}   />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div> 
        <div className="hidden gap-2 lg:flex">
          <Link href="/book">
          <CustomButton Value={contact} />
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Link href="/book">

          <CustomButton Value={contact} />
        </Link>
      </Collapse>
    </Navbar>
  );
}
