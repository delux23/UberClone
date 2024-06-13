import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <div>
      <Image src = '/uber-banner.png' width = {1500} height = {900}
      className = " object-contain h-full w-full"/>

      <div className='absolute top-40 right-10 col-span-3'>
      <SignIn />
      </div>
      
    </div>
    </>
    );
}
