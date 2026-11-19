import React from 'react'   
import globe from "@/public/globe.svg"
import Image from "next/image"
const Hero = () => {
  return (
    <div>
    
      <Image src={globe} alt="Globe"
      
      width={100}
      height={100}
      style={{ objectFit: "cover" }}
       />
    </div>
  )
}

export default Hero
