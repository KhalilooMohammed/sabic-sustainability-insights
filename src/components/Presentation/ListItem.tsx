
import { Check, ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
  type?: "check" | "arrow" | "bullet";
  className?: string;
  compact?: boolean;
}

export const ListItem = ({ children, type = "bullet", className = "", compact = false }: ListItemProps) => {
  return (
    <div className={`flex items-start gap-1.5 ${compact ? "mb-0.5" : "mb-1.5"} animate-slide-in ${className}`}>
      {type === "check" && <Check className={`text-sabic-primary ${compact ? "mt-0.5 h-3.5 w-3.5" : "mt-1 h-5 w-5"} flex-shrink-0`} />}
      {type === "arrow" && <ChevronLeft className={`text-sabic-secondary ${compact ? "mt-0.5 h-3.5 w-3.5" : "mt-1 h-5 w-5"} flex-shrink-0`} />}
      {type === "bullet" && <div className={`${compact ? "mt-1.5 w-1.5 h-1.5" : "mt-2 w-2 h-2"} bg-sabic-tertiary rounded-full flex-shrink-0`} />}
      <div className={`${compact ? "text-xs" : ""}`}>{children}</div>
    </div>
  );
};

export default ListItem;
