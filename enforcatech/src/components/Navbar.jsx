import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <header className="fixed text-white top-3 left-2 right-2 md:left-16 md:right-16 z-50 bg-gray-950 backdrop-blur-lg bg-opacity-15 rounded-full align-middle">
            <nav className="flex justify-between px-6 py-4">
                <div>
                    <h1 className="text-xl">Enforca</h1>
                </div>
                <div className="hidden md:flex gap-8">
                    <p>For Mentorship</p>
                    <p>For Job Seekers</p>
                </div>
                <div className="hidden md:block">
                    <button>Get Started</button>
                </div>
                <div className="pl-[250px] md:hidden">
                    <button onClick={() => setIsActive(!isActive)}>
                        {isActive ? <RiCloseFill className="size-5" /> : <RxHamburgerMenu />}
                    </button>
                </div>
                {
                    isActive && <div className="absolute w-full grid gap-2 bg-white text-black top-16 p-6 left-0 right-0">
                        <Link to='/'>Mentorship</Link>
                        <Link to='/'>Need AI job apllication and support?</Link>
                        <button className="px-6 py-2 bg-blu rounded-full text-white">Get Started</button>
                    </div>
                }
            </nav>
    </header>
  )
}

export default Navbar