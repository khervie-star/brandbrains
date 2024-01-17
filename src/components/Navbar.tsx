"use client";

import React from "react";
import logo from "../../public/bb_.png";
import styles from "../styles/navbar.module.css";
import { HiChevronDown } from "react-icons/hi";
import { Twirl as Hamburger } from "hamburger-react";
import { FaTwitter } from "react-icons/fa";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaChevronRight,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = React.useState(false);
  const [mobileDropdown, setMobileDropdown] = React.useState({
    about: false,
    programmes: false,
  });

  const toggleProgrammesDropdown = () => {
    setMobileDropdown({
      ...mobileDropdown,
      programmes: !mobileDropdown.programmes,
    });
  };

  const toggleAboutDropdown = () => {
    setMobileDropdown({
      ...mobileDropdown,
      about: !mobileDropdown.about,
    });
  };

  return (
    <nav className={"w-full bg-gt_purple  shadow-main fixed z-[400]"}>
      <div className="container mx-auto w-full flex justify-between items-center py-[10px] px-4 md:px-[30px]">
        <Link href={"/"} className={`flex items-center gap-2 no-underline`}>
          <Image
            src={logo}
            alt="Brand Brains"
            className={"w-[100px] md:w-[150px] h-full"}
          />
        </Link>

        <div className="" id="">
          <ul
            className={`items-center list-none m-0 gap-1 font-montserrat font-semibold text-white hidden md:flex`}>
            <li>
              <Link
                href="/"
                className={`${styles.nav_link} ${
                  pathname === "/" ? styles.active : ""
                }`}>
                Home
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                Services
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${styles.nav_link} ${
                  pathname === "/contact" ? styles.active : ""
                }`}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            label="Show menu"
            rounded
            size={20}
          />
        </div>
        <div
          className={`absolute top-0 left-0 bg-gt_purple w-full rounded-br-[15px] rounded-bl-[15px] px-[20px] transition-all duration-500 z-[500] ${
            isOpen ? "translate-y-[0px]" : "-translate-y-[500px]"
          }`}>
          <div className="flex justify-between items-center mt-[14px] mb-[20px]">
            <Image
              src={logo}
              alt="Glory Tabernacle Ministry Logo"
              className={"w-[35px] md:w-[50px] h-full"}
            />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              label="Show menu"
              rounded
              size={20}
            />{" "}
          </div>
          <ul className="flex flex-col gap-5 py-4 items-start border-b border-[yellow] border-solid text-white font-semibold font-montserrat">
            <li>
              <Link href={"/"} onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                Services
              </Link>
            </li>

            <li>
              <Link href="#" className={styles.nav_link}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link href={"/contact"} onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center text-[yellow] py-7">
            <Link
              href="https://www.facebook.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.twitter.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.youtube.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaYoutube />
            </Link>
            <Link
              href="https://www.instagram.com/GTMinistryIb/"
              target="_blank"
              className="me-5 text-reset">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
