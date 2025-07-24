import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section className="section" {...props}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
