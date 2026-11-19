
"use client";
import{useRouter} from "next/navigation";
import { useState } from "react";
import Link from 'next/link';
import Hero from "@/src/components/Hero";
export default function Home() {
  const [count, setCount] = useState(8);
  const router = useRouter();
 
  return (
    <div> 
      <Hero />
      <button onClick={()=>setCount(count + 1)}>click me</button>
      <p>count: {count}</p>
    <Link href="/about">go to about</Link>
    < br />
    <button onClick={()=>router.push("/login")}>go to login</button>
    </div>
  ); 
}

