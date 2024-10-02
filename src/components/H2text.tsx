import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type H2textProps = {
    children: React.ReactNode,
    className?: string;
}


const H2text = ({children,className} : H2textProps) => {
  return (
    <h2 className={cn(className , 'inline-block rounded-lg bg-purple-600 text-white px-3 py-1 text-sm font-bold')}>
        {children}
    </h2>
  );
};

export default H2text;
