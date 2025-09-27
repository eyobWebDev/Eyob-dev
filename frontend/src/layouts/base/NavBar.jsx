import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useThemeStore } from "@/store/useThemeStore"
import { LogIn, MenuIcon, MoonStar, Sun } from "lucide-react"
import { Menu } from "@radix-ui/react-menubar"
import DropDownMenu from "@/widget/DropDownMenu"

export default function NavBar() {
    const {darkMode, toggleDarkMode} = useThemeStore()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    const handleDarkMode = () => {
        toggleDarkMode()
    }

    const navbarStyle = scrolled ? darkMode ? "navbar-container-dark" : "navbar-container-light" : ""

    console.log(window.scroll);
    

    return <>
        <div className={`flex fixed top-0 z-50  ${navbarStyle} justify-between lg:p-5 p-3 items-center w-full`}>
            <div className="lg:text-3xl md:text-2xl  navbar-title font-bold">Eyob.dev</div>

            <div className="lg:flex items-center hidden gap-7">
                <a href="#home" className={`navbar-link target:text-blue-500 hover:text-blue-500`}>Home</a>
                <a href="#about" className={`navbar-link target:text-blue-500 hover:text-blue-500`}>About</a>
                <a href="#skills" className={`navbar-link hover:text-blue-500`}>Skills</a>
                <a href="#projects" className={`navbar-link hover:text-blue-500`}>Projects</a>
                <div onClick={handleDarkMode} className={`navbar-link p-2 rounded ${darkMode ? "hover:bg-gray-600": "hover:bg-gray-300"}`}>{darkMode ? <Sun/> : <MoonStar />}</div>
                <a href="#contact" className={`hover:text-blue-500`}><Button variant={`outline`} className={`hover:bg-blue-200`}>Hire me</Button></a>
            </div>

            <div className="flex items-center lg:hidden gap-2">
                <div onClick={handleDarkMode} className={`navbar-link p-2 rounded ${darkMode ? "hover:bg-gray-600": "hover:bg-gray-300"}`}>{darkMode ? <Sun/> : <MoonStar />}</div>
                <DropDownMenu />
            </div>
        </div>
    </>
}