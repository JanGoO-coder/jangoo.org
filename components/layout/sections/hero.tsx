"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, SendHorizonal } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section id="hero" className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-28 md:py-44">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Hey!</Badge>
            </span>
            <span> Welcome to JanGoO </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Transforming your
              <span className="text-transparent px-2 bg-gradient-to-r from-[#00a2ff] to-[#007AFF] bg-clip-text">
              Visions
              </span>
              into Reality
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-lg text-muted-foreground">
            {`We are more than just a team; we are your partners in innovation. 
            From design and development to deployment and AI technologies, 
            we offer comprehensive solutions to bring your vision to life.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
            <Link
                href="#contact"
              >
                Start Conversation
              </Link>
              <SendHorizonal className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="#team"
                target="_blank"
              >
                Meet the team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
