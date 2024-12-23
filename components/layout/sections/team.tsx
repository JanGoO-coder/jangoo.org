import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import DribbbleIcon from "@/components/icons/dribbble-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import BehanceIcon from "@/components/icons/behance-icon";
import PeerlistIcon from "@/components/icons/peerlist-icon";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  portfolio?: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://i.imgur.com/WwCNh2t.jpeg",
      firstName: "M. Ali",
      lastName: "Shehzad",
      positions: ["Digital Solution Provider"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "https://i.imgur.com/Om3RbAF.jpeg",
      firstName: "Asad",
      lastName: "Ali",
      positions: ["Full Stack Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "https://i.imgur.com/fGdb9ps.jpeg",
      firstName: "Danish",
      lastName: "Fareed",
      portfolio: "https://danish.jangoo.org",
      positions: ["Product Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/danish-fareed-graphics/",
        },
        {
          name: "Dribbble",
          url: "https://dribbble.com/DanishFareed",
        },
        {
          name: "Behance",
          url: "https://dribbble.com/DanishFareed",
        },
        {
          name: "Github",
          url: "https://dribbble.com/DanishFareed",
        },
        {
          name: "Peerlist",
          url: "https://dribbble.com/DanishFareed",
        },
      ],
    },
    {
      imageUrl: "https://i.imgur.com/HZv63AF.png",
      firstName: "Malik",
      lastName: "Irfan",
      positions: ["Backend Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
      case "Dribbble":
        return <DribbbleIcon />;
      case "Behance":
        return <BehanceIcon />;
      case "Peerlist":
        return <PeerlistIcon />;
    }
  };

  return (
    <section
      id="team"
      className="container lg:w-[75%] py-24 sm:py-32 scroll-mt-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            {
              imageUrl,
              firstName,
              lastName,
              portfolio,
              positions,
              socialNetworks,
            },
            index
          ) => (
            <Card
              key={index}
              className="bg-white dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <Link
                  href={portfolio ?? "#"}
                  target="_blank"
                  className="group/hoverimg"
                >
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover saturate-100 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-0 group-hover/hoverimg:scale-[1.01] cursor-pointer"
                    />
                  </div>
                </Link>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
