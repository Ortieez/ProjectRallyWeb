import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="bg-red-200 w-full justify-center flex bg-secondary content-center flex-wrap sticky top-0">
        <ul className="flex flex-row text-xl">
          <li className="py-2 px-5 hover:bg-green">
            <Link href="#">Features</Link>
          </li>
          <li className="py-2 px-5 hover:bg-red">
            <Link href="#">Available Cars</Link>
          </li>
          <li className="py-2 px-5 hover:bg-yellow">
            <Link href="#">Available Tracks</Link>
          </li>
          <li className="py-2 px-5 hover:bg-blue">
            <Link href="#">Online Leaderboard</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
