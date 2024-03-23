import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="bg-red-200 w-full justify-center flex bg-secondary content-center flex-wrap">
      <ul className="flex max-md:flex-col max-md:w-full max-md:text-center flex-row text-xl">
        <Link href="#features">
          <li className="py-2 px-5 max-md:w-full hover:bg-green">Features</li>
        </Link>
        <Link href="#cars">
          <li className="py-2 px-5 hover:bg-red">Available Cars</li>
        </Link>
        <Link href="#tracks">
          <li className="py-2 px-5 hover:bg-yellow">Available Tracks</li>
        </Link>
        <Link href="#leaderboard">
          <li className="py-2 px-5 hover:bg-blue">Online Leaderboard</li>
        </Link>
      </ul>
    </nav>
  );
}
