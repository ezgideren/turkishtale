import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-6 md:h-12 p-4 lg:p-8 xl:p-8 text-[#333230] flex items-center justify-between">
      <Link href={'/'} className="font-bold text-xs">Turkish Tale</Link>
      <p className="text-xs"> COPYRIGHT © 2024 TURKISH TALE - ALL RIGHTS RESERVED. </p>
    </div>
  );
}   

export default Footer;