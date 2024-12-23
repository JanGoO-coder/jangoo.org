import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Expertise and Experience",
    description:
      "Our team has years of experience in web development, ensuring your project is in capable hands.",
  },
  {
    icon: "LineChart",
    title: "Customized Solutions",
    description:
      "We provide tailored solutions to meet your specific business needs and goals.",
  },
  {
    icon: "Wallet",
    title: "Cost-Effective",
    description:
      "Get the best value for your investment with our competitive pricing and high-quality services.",
  },
  {
    icon: "Sparkle",
    title: "Innovative Ideas",
    description:
      "We bring fresh and innovative ideas to the table, helping your website stand out from the competition.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 scroll-mt-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover the advantages of partnering with us for your web development needs. Our team has years of experience in web development, ensuring your project is in capable hands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-white dark:bg-card hover:shadow-lg delay-75 group/number cursor-pointer duration-300"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary opacity-60"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
