"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const pathname = usePathname();
  return (
<div>
    { pathname !== "/about/aboutcollege" ?
    
    <ul> <h1>About  ka page hai layout isme conditional bhi hai</h1>
        <li><Link href="/about">*About</Link></li>
        <li><Link href="/about/aboutstudent">*Aboutstudent</Link></li>
        <li><Link href="/about/aboutcollege">*aboutcollege</Link></li>
    </ul> :null
}
    {children}
</div>

 
  );
}                                   