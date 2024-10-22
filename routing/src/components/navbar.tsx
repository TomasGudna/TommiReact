import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
        <div className="pt-20 pb-20 bg-green-300">
            <Link href="/">Home</Link>
            <Link href="/quotes">Shrek Quotes</Link>
            <Link href="/donkey">Donkey</Link>
            <Link href="/album">Album</Link>
        </div>

    );
};

export default Navbar;