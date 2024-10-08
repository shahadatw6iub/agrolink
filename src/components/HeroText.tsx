"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";

export default function Herotext() {
    const words = [
        {
            text: "Help",
        },
        {
            text: "and",
        },
        {
            text: "get",
        },
        {
            text: "in return",
        },
        {
            text: "with Agro-Fin.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <Image
                src="/images/logo.png"
                className="rounded-full"
                width={200}
                height={200}
                alt="Avatar"
            />
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The road to fairness starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div>
        </div>
    );
}
