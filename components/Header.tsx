import Image from "next/image";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-screen bg-white">
      {/* Mobile Navigation */}
      <nav className="m-6 flex justify-between lg:hidden  ">
        <Image src="/logo-simple.png" width={105} height={24} alt="logo" />
        <div className="relative z-50">
          <Hamburger onToggle={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && <Menu />}
      </nav>
      {/* Desktop navbar */}
      <nav className="m-6 lg:flex justify-between items-center hidden max-w-[1280px] xl:mx-auto">
        <Image src="/logo-simple.png" width={105} height={24} alt="logo" />
        <NavigationMenuDemo/>
        <Button>Get In Touch</Button>
      </nav>
    </header>
  );
}
