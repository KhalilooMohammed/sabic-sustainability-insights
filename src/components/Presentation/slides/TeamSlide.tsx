
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const TeamSlide = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  const teamMembers = [
    "أروى أحمد المالكي",
    "دانة حسني شوشو",
    "ريناد عمر الزهراني",
    "مياسر المسعودي",
    "خولة عبدالرحمن الحربي",
    "سارة عايض الصاعدي",
  ];

  return (
    <Slide title="فريق العمل" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-sabic-primary mb-8">إعداد الفريق</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-sabic-light rounded-full flex items-center justify-center mb-3">
                  <User className="h-7 w-7 text-sabic-primary" />
                </div>
                <p className="font-medium text-lg">{member}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default TeamSlide;
