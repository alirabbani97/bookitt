import { BookDown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center px-20 py-10 ">
        <div className="flex">
          <BookDown /> <span className="text-xl">Bookitt</span>
        </div>
        <section>
          <ul className="flex gap-x-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </section>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
}
