import React from "react";

const Notification = () => {
  return (
    //centered vertically and horizontally via items-center and justify-center
    <div className='h-8 bg-[#e5ccb0] text-[#333230] px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>
      Our menu changes weekly. Check out this weeks!
    </div>
  );
}

export default Notification; 