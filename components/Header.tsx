"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
const Header: React.FC = () => {
  const session=useSession();
  return (
    <header className="bg-gradient-to-r from-[#2A0944] via-[#3B185F] to-[#5C2E7E] shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and App Name */}
        <Link href="/" className="text-2xl font-bold text-white flex items-center space-x-2">
          <img src="/path-to-logo.png" alt="" className="h-8 w-8" />
          <span>MoodMap</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/stress-test" className="text-white hover:text-gray-300 transition-colors">
              Stress Test
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-white hover:text-gray-300 transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/ai-support" className="text-white hover:text-gray-300 transition-colors">
              AI Support
            </Link>
          </li>
          <li>
            <Link href="/games" className="text-white hover:text-gray-300 transition-colors">
              Games
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
        </ul>

        {/* Sign-in Button */}
        <Button onClick={()=>{session.status=='authenticated'?signOut():redirect('/signin')}}  className="ml-6 px-6 py-2 bg-white text-purple-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all">
          {session.status=='authenticated'?"Log Out":"Sign In"}
        </Button>
      </nav>
    </header>
  );
};

export default Header;

