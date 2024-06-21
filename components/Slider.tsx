import React from "react";
import Image from "next/image";


const Slider = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
            {/* TEXT CONTAINER */}
            <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-[#333230] font-bold lg:h-full lg:w-1/2">
                <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">test</h1>
                <button className="bg-[#333230] text-white hover:bg-[#e5ccb0] py-4 px-8">Reserve Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
                <Image src="/slider1.jpeg" alt="" fill className="object-cover" />
            </div>
        </div>
    )
 }
export default Slider;
