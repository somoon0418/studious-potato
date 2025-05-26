import { cn } from "../../lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ title, subtitle, className }: HeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col py-10 px-5 lg:py-20 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10",
        className
      )}
    >
      <h1 className="text-2xl lg:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-xl lg:text-2xl font-light text-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
