
import Slide from "../Slide";
import { Badge } from "@/components/ui/badge";

const TitleSlide = () => {
  return (
    <Slide title="العنوان" isTitle={true}>
      <div className="text-center px-8">
        <Badge variant="outline" className="mb-8 text-sabic-tertiary border-sabic-tertiary">
          مقرر الإدارة الاستراتيجية – الفصل الدراسي 2025
        </Badge>
        <div className="w-20 h-20 mx-auto mb-8 bg-sabic-primary rounded-full flex items-center justify-center text-white">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-sabic-primary mb-6 leading-tight">
          تحليل شركة سابك وتوصيات لتعزيز الاستدامة
        </h1>
        <div className="w-24 h-1 bg-sabic-secondary mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 mb-12">
          دراسة استراتيجية شاملة عن مستقبل شركة سابك في الاقتصاد الأخضر
        </p>
      </div>
    </Slide>
  );
};

export default TitleSlide;
