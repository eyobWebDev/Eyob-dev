import NavBar from "@/layouts/base/NavBar";
import "../assets/styles/home_page.css"
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartLineIcon, FolderClosed, Github, Handshake, MessageCircleMore, Twitter, Workflow } from "lucide-react";
import { primary } from "@/assets/styles/colors";
import Footer from "@/layouts/base/Footer";
import { useThemeStore } from "@/store/useThemeStore";
import AboutSection from "@/section/AboutSection";
import TeckStackSection from "@/section/TeckStackSection";
import FeaturedProjectSection from "@/section/FeaturedProjectSection";
import { NavLink } from "react-router-dom";
import ContactSection from "@/section/ContactSection";

export default function HomePage() {
    const {darkMode} = useThemeStore()


    return <>
 
     <div className="w-[100%] flex flex-col justify-center items-center home-page h-[100vh] bg-transparent before:bg-amber-50">
        <NavBar />
        <div className="lg:pl-70 lg:pr-70 p-5 flex flex-col gap-6">
            <div className="flex-col flex gap-1 lg:mt-30 text-center">
                <div className="lg:text-7xl text-4xl opacity-95 font-bold">Fullstack Developer</div>
                <div className="lg:text-5xl pt-2 pb-2 text-3xl font-bold text-gradient">Building Digital Experiences.</div>
                <div className="lg:text-[20px] text-[16px] opacity-65 mt-3">I create modern web applications with cutting-edge technologies and exceptional user experiences.</div>
            </div>

            <div>
                <a href="#contact">
                    <Button className={`w-35 mt-5 p-6 text-[17px] flex justify-center items-center scale-btn cursor-pointer cta-btn bg-[${primary}]`}>
                    <div>Hire me</div> <ArrowRight size={30} /></Button>
                </a>
            </div>
        </div>

        <div className="flex justify-center mt-10 gap-10 w-full items-center">
            <a target="_blank"  href={`https://github.com/eyobWebDev`} className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700": "hover:bg-gray-300"}`} ><Github /></a>
            <a target="_blank" href={`https://x.com/Eyob357`} className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700": "hover:bg-gray-300"}`} ><Twitter /></a>
        </div>
     </div>

     <AboutSection />
     <TeckStackSection />
     <FeaturedProjectSection />
     <ContactSection />

     <Footer />
    </>
}