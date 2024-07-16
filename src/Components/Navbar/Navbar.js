"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/assets/svgs/Logo.svg";
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
import CustomButton from "@/Components/button/CustomButton";

function NavList() {
  // All Navbar list
  const items = [
    { text: "home", id: 1 },
    { text: "about", id: 2 },
    { text: "contact", id: 3 },
    { text: "services", id: 4 },
    { text: "gallery", id: 5 },
    { text: "pricing", id: 6},
  ];

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {items.map((data) => {
        // dispalying the nav list
        return (
          <Typography
            as="a"
            href={data.text === "home" ? "/" : `/${data.text} `}
            variant="small"
            color="blue-gray"
            className="font-medium flex"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              key={data.id}
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
  const [openNav, setOpenNav] = useState(false);
  const contact = "Book Appointment";
  useEffect(() => {
    // media query
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto rounded-none px-8 py-2 sticky top-0  z-[999] bg-white" fullWidth={true} blurred={false}>
      <div className="flex items-center justify-between text-blue-gray-900">
    
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
              <Image src={Logo} alt="" width={120}/>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <CustomButton Value={contact} />
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
        <CustomButton Value={contact} />
      </Collapse>
    </Navbar>
  );
}
