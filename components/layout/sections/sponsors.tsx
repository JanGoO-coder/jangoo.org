/* eslint-disable @next/next/no-img-element */
"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface sponsorsProps {
  alt: string;
  src_light: string;
  src_dark: string;
}

const sponsors: sponsorsProps[] = [
  {
    alt: "RAMBLE",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Framble.svg?alt=media&token=3567c3b3-aaec-4bc1-8513-c16ef993c462",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2FFrame%201000011891.svg?alt=media&token=8dffa555-7600-44ce-8f8a-5fb834976de9",
  },
  {
    alt: "Ozaar",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Fozaar.svg?alt=media&token=fb4f851c-b780-4e79-8abb-09c97fa0328f",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2Fozaar-light.svg?alt=media&token=0e3adf6b-5f5f-4201-9521-81e8bf7891c9",
  },
  {
    alt: "Keyhole",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Fkeyhole.svg?alt=media&token=064c4de8-fc45-4649-b7ee-fd9db724063f",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2FLogo.svg?alt=media&token=5c08bd16-c9d5-4282-88b4-13d5e7b17dd0",
  },
  {
    alt: "Horiizongo",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Fhorizongo.svg?alt=media&token=1a3c9e52-140a-42fa-9a10-a602dcae12dc",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2FGroup%2021.svg?alt=media&token=798b08d0-12c3-4dee-bccb-570f01afde67",
  },
  {
    alt: "LCA",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2FLCA.svg?alt=media&token=a3ea303a-71fd-4687-af49-d21a1e3da118",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2FGroup%20427319118.svg?alt=media&token=a1c5bcd5-475a-4c17-ac0a-b3717d357488",
  },
  {
    alt: "Typonify",
    src_light:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2FTyponify.svg?alt=media&token=5bc83f27-d2d8-4556-b43b-b8b5782f5110",
    src_dark:
      "https://firebasestorage.googleapis.com/v0/b/designerdanish-1a0eb.appspot.com/o/Jangoo.org%2Flight%2FGroup%201000006158.svg?alt=media&token=df94dd84-d214-445a-b2d4-90a8e1aae519",
  },
];

export const SponsorsSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      {/* <h2 className="text-[#0000008c] font-normal text-md text-center mb-12">
        Our Clients & Projects
      </h2> */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={theme === "dark" && mounted ? sponsor.src_dark : sponsor.src_light}
              alt={sponsor.alt}
              className="max-h-7 w-full opacity-50"
            />
          ))}
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={theme === "dark" && mounted ? sponsor.src_dark : sponsor.src_light}
              alt={sponsor.alt}
              className="max-h-7 w-full opacity-50"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
