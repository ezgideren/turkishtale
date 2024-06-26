import React from "react";
import Image from "next/image";
import { todaysMenu } from "@/data";

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll text-[#333230]">
           {/* WRAPPER */}
           <div className="w-max flex">
            {/* SINGLE ITEM */} 
                {todaysMenu.map((item) => (        
                    <div key={item.id} 
                    className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#e5ccb0] md:w-[50vw] xl:[33vw] xl:h-[90vh]">
                    
                    {/* IMAGE CONTAINER*/}
                    {item.img && (
                    <div className="relative flex-1 w-full">
                        <Image src={item.img} alt="" fill className="object-contain" />
                    </div>)} 
                    {/* TEXT CONTAINER */}
                    <div className="flex-1 flex flex-col items-center text-center justify-center gap-4 p-4">
                        <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                        <p className="p-4 2xl:p-8 ">{item.desc}</p>
                        <span className="text-xl font-bold">€{item.price}</span>
                        <button className="bg-[#333230] text-white p-2 rounded-md">Reserve</button>
                    </div>
                </div>
                ))}
           </div>
        </div>
    )}

 export default Featured;