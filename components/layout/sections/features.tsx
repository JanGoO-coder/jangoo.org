import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Web & Mobile Design",
    description:
      "Crafting visually stunning and user-friendly designs for both web and mobile applications.",
  },
  {
    icon: "Code",
    title: "Development",
    description:
      "Building robust and scalable web and mobile applications tailored to your needs.",
  },
  {
    icon: "Fingerprint",
    title: "Security",
    description:
      "Implementing top-notch security measures to protect your applications and data.",
  },
  {
    icon: "ScanSearch",
    title: "SEO Optimization",
    description:
      "Enhancing your online presence with effective SEO strategies to drive traffic.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description:
      "Fostering a collaborative environment to ensure seamless project execution.",
  },
  {
    icon: "Headset",
    title: "Customer Support",
    description:
      "Providing exceptional customer support to address all your queries and concerns.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 scroll-mt-16">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Our Team Stand Out
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover the unique features that set our team apart in delivering exceptional web and mobile solutions.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
