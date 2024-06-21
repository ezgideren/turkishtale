import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[#333230] lg:flex-row">
      {/* PRODUCTS CONTAINER*/}
      <div className="h-4/5 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-4/5 lg:px-20 xl:px-40">
        {/* SINGLE ITEM CONTAINER*/}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/arnavutcigeri.jpg" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold ">Arnavut Cigeri</h1>
          </div>
          <h2 className="font-bold">8</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM CONTAINER*/}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/sobiyet.jpg" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold ">Sobiyet</h1>
          </div>
          <h2 className="font-bold">8</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM CONTAINER*/}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/cigkofte.jpg" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold ">Cig Kofte</h1>
          </div>
          <h2 className="font-bold">8</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER*/}
      <div className="h-1/5 p-4 bg-[#feefdd] flex flex-col gap-4 justify-between lg:h-full lg:w-1/5 ">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">50</span>
        </div>
        <button className="bg-[#e5ccb0] text-[#333230] p-3 rounded-md w-1/3 self-end">RESERVE</button>
      </div>
    </div>
  );
}

export default CartPage;