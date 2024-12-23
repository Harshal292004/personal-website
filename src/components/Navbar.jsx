import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={()=>{}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a
                        href="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Harshal
                    </a>
                    <div className="sm:hidden flex">
                    <Hamburger 
                        toggled={isOpen}
                        toggle={setIsOpen}
                        size={20}
                        rounded
                        hideOutline={false}
                        duration={0.8}
                        distance="lg"
                        color="white"
                    />
                    </div>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
                {isOpen && (
                    <nav className="nav-sidebar">
                        <NavItems />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
