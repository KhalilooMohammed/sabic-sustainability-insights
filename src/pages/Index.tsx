
import Presentation from "../components/Presentation/Presentation";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "مرحبًا بك في العرض التقديمي لتحليل شركة سابك",
      description: "استخدم الأسهم للتنقل بين الشرائح",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="h-screen overflow-hidden">
      <Presentation />
    </div>
  );
};

export default Index;
