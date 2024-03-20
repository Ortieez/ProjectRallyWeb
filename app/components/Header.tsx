import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="bg-red-200 w-full justify-center flex bg-secondary content-center flex-wrap">
      <ul className="flex flex-row text-xl">
        <li className="py-2 px-5 hover:bg-green">
          <Link href="#features">Features</Link>
        </li>
        <li className="py-2 px-5 hover:bg-red">
          <Link href="#cars">Available Cars</Link>
        </li>
        <li className="py-2 px-5 hover:bg-yellow">
          <Link href="#tracks">Available Tracks</Link>
        </li>
        <li className="py-2 px-5 hover:bg-blue">
          <Link href="#leaderboard">Online Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
}
