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
            {
                icon: <NavbarItem text="hy" className="text-[#E6681D] text-xl font-bold italic underline" />,
                link: "/",
            }
        ],
        middle: [],
        right: [

            {
                icon: <NavbarItem text="Articles" />,
                link: "/posts",
            },
            {
                icon: <NavbarItem text="About" />,
                link: "/posts/about",
            },
            {
                icon: <Linkedin size={20} className="mx-2 text-primary-foreground hover:text-primary" />,
                link: "https://www.linkedin.com/in/hy-h-40983b1b6"
            },
            {
                icon: <LucideGithub size={20} className="mx-2 text-primary-foreground hover:text-primary" />,
                link: "https://www.github.com/hoxirious/"
            },
        ],
    }

    const navBarVariant = homeNavBarList;


    return (
        <div className=" bg-gradient-to-b to-[#64909E] from-primary navbar-container">
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
                        <Link key={index} href={item.link} download="cv">
                            {item.icon}
                        </Link>
                    ))}
                    <a href="/Hy_Huynh_Resume.pdf" download="Hy_Huynh_Resume" title="Resume"> <FileText size={20} className="mx-2 text-primary-foreground hover:text-primary" /></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
