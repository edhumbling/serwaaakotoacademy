
import React from 'react';
import { cn } from "@/lib/utils";

interface SpliteProps {
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
}

const Splite = ({
  className,
  title,
  subtitle,
  description,
  children,
}: SpliteProps) => {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              {subtitle && (
                <p className="text-sm uppercase tracking-wider text-school-seaBlue">
                  {subtitle}
                </p>
              )}
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">
                {title}
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splite;
