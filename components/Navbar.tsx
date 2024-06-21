import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const user = false;

const Navbar = () => {
    return (
        <div className="h-12 text-[#333230] p-4 flex items-center justify-between border-b-2 border-b-[#e5ccb0] uppercase md:h-24 lg:px-20 xl:px40 ">
        {/*LEFT LINKS*/}
        <div className="hidden md:flex gap-4 flex-1">
            <Link href="/">Homepage</Link>
            <Link href="/">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className="text-xl md:font-bold flex-1 md:text-center">
            <Link href="/">Turkish Tale</Link>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            <Menu />
        </div>
        {/*RIGHT LINKS*/}
        <div className="hidden md:flex gap-4 items-center justify-end flex-1">
            <div className="md:absolute top-1 r-2 lg:static flex items-center gap-2 cursor-pointer">
                <Image src="/phone.png" alt= "" width={20} height={20}/>
                +31 666 21 11 21
            </div>
            {!user ? (<Link href="/login">Login</Link>
            ) : (
            <Link href="/orders">Orders</Link>
            )}
            <CartIcon/>
        </div>
    </div>
    );
    }   

export default Navbar;