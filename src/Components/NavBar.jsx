import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { FaBars, FaCartPlus, FaTimes } from "react-icons/fa";
const navItems = [
    { path: "/", label: "Furniture" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
];

const NavItem = ({handleToggle}) => {
    return (
        <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
            {navItems.map((NavItem, index) => (
                <li key={index} onClick={handleToggle}>
                    <NavLink
                        to={NavItem.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-600 font-bold"
                                : "hover:text-yellow-600"
                        }
                    >
                        {NavItem.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = ()=>setIsOpen(!isOpen)
    return (
        <header>
            <nav className="container mx-auto max-w-screen-2xl flex justify-between items-center py-6 px-4 ">
                {/* logo  */}
                <Link to="/" className="font-bold">
                    Panto
                </Link>
                {/* hamburger menu for mobile  */}
                <div className="md:hidden text-xl cursor-pointer hover:text-yellow-600" onClick={handleToggle} >
                    {
                        isOpen ? null : <FaBars/>
                    }
                </div>
                {/* mobile menu items  */}
                <div className={`fixed top-0 left-0 w-0 h-screen bg-amber-500 bg-opacity-80 flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isOpen? 'translate-x-0': '-translate-x-full'} md:hidden`}>
                    <div className="cursor-pointer" onClick={handleToggle}><FaTimes/></div>
                    <NavItem/>
                </div>

                {/* mid section -- menu item */}
                <div  className="hidden md:flex">
                    <NavItem handleToggle= {handleToggle}  />
                </div>

                {/* cart icon  */}
                <div className="hidden md:block cursor-pointer relative">
                    <FaCartPlus className="text-xl" />
                    <sup className="absolute top-0 -right-3 bg-amber-600 text-white w-4 h- rounded-full flex items-center justify-center text-xs">
                        0
                    </sup>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
