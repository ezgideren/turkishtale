import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/*BOX*/}
      <div className="h-full shadow-2xl">
        {/*IMAGE CONTAINER*/}
        <div className="relative">
          <Image src="/login.png" alt="" fill />
        </div>
        {/*FORM CONTAINER*/}
        <div className="">
          <h1>Welcome</h1>
          <p>Log in to your acoount or create a new one</p>
          <button className="flex gap-4 p-4 ring-1 rounded-md">
            <Image src="/google.webp" alt="" width={20} height={20} className="object-contain"/>
            <span>Sign in with Google</span>
            </button>
          <button className="flex gap-4 p-4 ring-1 rounded-md">
          <Image src="/facebook.jpeg" alt="" width={20} height={20} className="object-contain"/>
          <span>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;