"use client"
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {Logo} from "@/app/components/logo";
import {sendMail} from "@/app/services/email-sernder";
import {ContactModal} from "@/app/components/contact-modal";

export default function Navbar() {
    return (
        <nav className={"fixed backdrop-blur z-40 py-4 text-xl w-full text-white justify-between px-8 flex items-center border-b-[1px] border-b-white/30"}>
            <Logo className={"fill-white hover:fill-red-600 transition-colors"}/>
            <div>
                <Link href={"#pricing"} className={"hover:text-red-600 pr-8 transition-colors"}>Price</Link>
                <Link href={"#coaches"} className={"hover:text-red-600 pr-8 transition-colors"}>Coaches</Link>
                <Link href={"#about"} className={"hover:text-red-600 pr-8 transition-colors"}>About</Link>
            </div>
            <ContactModal/>
        </nav>
    );
}