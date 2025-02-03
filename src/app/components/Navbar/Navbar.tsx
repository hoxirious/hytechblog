import Link from "next/link";
import { FileText, Linkedin, LucideGithub } from "lucide-react";
import "./Navbar.scss";
import NavbarItem from "./components/NavbarItem";

const NavBar = () => {
    const homeNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
        ],
        middle: [
            //{
            //    icon: <NavbarItem text="hy" className="text-[#E6681D] text-4xl font-bold italic underline" />,
            //    link: "/",
            //},
            {
                icon: <NavbarItem text="Home" />,
                link: "/",
            },
            {
                icon: <NavbarItem text="Articles" />,
                link: "/posts",
            },
            {
                icon: <NavbarItem text="About" />,
                link: "/posts/about",
            },
            {
                icon: <Linkedin size={40} className="mx-2 text-primary-foreground hover:border-b-2 pb-2" />,
                link: "https://www.linkedin.com/in/hy-h-40983b1b6"
            },
            {
                icon: <LucideGithub size={40} className="mx-2 text-primary-foreground hover:border-b-2 pb-2" />,
                link: "https://www.github.com/hoxirious/"
            },
            ],
        right: [],
    }

    const navBarVariant = homeNavBarList;


    return (
        <div className="w-full bg-gradient-to-b to-[#64909E] from-primary navbar-container">
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
                    <a href="/Hy_Huynh_Resume.pdf" download="Hy_Huynh_Resume" title="Resume"> <FileText size={40} className="mx-2 text-primary-foreground pb-2 hover:border-b-2" /></a>
                </div>
                <div className="navbar-item navbar-right">
                    {navBarVariant.right.map((item, index) => (
                        <Link key={index} href={item.link} download="cv">
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar;
