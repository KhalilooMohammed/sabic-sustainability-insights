
import { Check, ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
  type?: "check" | "arrow" | "bullet";
  className?: string;
}

const ListItem = ({ children, type = "bullet", className = "" }: ListItemProps) => {
  return (
    <div className={`flex items-start gap-2 mb-2 animate-slide-in ${className}`}>
      {type === "check" && <Check className="text-sabic-primary mt-1 h-5 w-5 flex-shrink-0" />}
      {type === "arrow" && <ChevronLeft className="text-sabic-secondary mt-1 h-5 w-5 flex-shrink-0" />}
      {type === "bullet" && <div className="mt-2 w-2 h-2 bg-sabic-tertiary rounded-full flex-shrink-0" />}
      <div>{children}</div>
    </div>
  );
};

export default ListItem;
