"use client"

import Image from "next/image";
import Link from "next/link";
import { CirclePlus, Search } from "lucide-react";
import NavBarButton from "./components/NavbarButton";
import bgeIcon from "public/animated-fox-pixel.png";
import "./Navbar.scss";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import NavbarItem from "./components/NavbarItem";

const NavBar = () => {
    const homeNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo" />,
                link: "/",
            },
            {
                icon: <NavbarItem text="Hy Huynh" />,
                link: "/home",
            }
        ],
        middle: [],
        right: [

            {
                icon: <NavbarItem text="Articles" />,
                link: "/articles",
            },
            {
                icon: <NavbarItem text="About" />,
                link: "/about",
            },
        ],
    }

    let navBarVariant = homeNavBarList;


    return (
        <div className="navbar">
            <div className="navbar-item navbar-left">
                {navBarVariant.left.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="navbar-item navbar-middle">
                {navBarVariant.middle.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="navbar-item navbar-right">
                {navBarVariant.right.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar;
