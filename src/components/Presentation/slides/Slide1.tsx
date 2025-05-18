
import Slide from "../Slide";
import ListItem from "../ListItem";
import { Card } from "@/components/ui/card";
import { Building2, BarChart3, Percent, Globe, Target } from "lucide-react";

const Slide1 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="نبذة عن شركة سابك وأهمية التحليل" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-sabic-light border-sabic-primary border-r-4">
            <div className="flex items-center mb-3">
              <Building2 className="h-6 w-6 text-sabic-primary ml-3" />
              <h3 className="text-xl font-bold">تأسيس وتطور سابك</h3>
            </div>
            <p>تأسست شركة سابك (الشركة السعودية للصناعات الأساسية) عام 1976م، وتُعد من أكبر شركات البتروكيماويات على المستوى العالمي، وعماد الصناعة في المملكة العربية السعودية.</p>
          </Card>
          
          <div className="space-y-4">
            <ListItem type="check">
              تسهم شركة سابك بنسبة تزيد عن 5% من الناتج المحلي السعودي، وفق تقرير 2023.
            </ListItem>
            <ListItem type="check">
              تعتمد الشركة على النفط في 70% من عملياتها، ما يجعل التحول للاستدامة البيئية ضرورة استراتيجية ملحة.
            </ListItem>
            <ListItem type="check">
              يشهد العالم حاليًا تحولًا جذريًا نحو الاقتصاد الأخضر، مما يفرض تحديات تنافسية وتشريعية على الشركات الكبرى مثل سابك.
            </ListItem>
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-sabic-primary mb-3 flex items-center">
              <Target className="h-5 w-5 ml-2" /> 
              الهدف من التحليل
            </h3>
            <p className="p-4 border-r-2 border-sabic-secondary">
              تقييم الوضع الاستراتيجي الحالي لشركة سابك من خلال تطبيق أدوات تحليل استراتيجية متعددة، وتقديم توصيات عملية لتعزيز موقعها التنافسي على المستوى العالمي.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 flex flex-col items-center text-center">
              <BarChart3 className="h-10 w-10 text-sabic-primary mb-2" />
              <h4 className="font-bold mb-1">5%</h4>
              <p className="text-sm">مساهمة في الناتج المحلي</p>
            </Card>
            <Card className="p-4 flex flex-col items-center text-center">
              <Percent className="h-10 w-10 text-sabic-secondary mb-2" />
              <h4 className="font-bold mb-1">70%</h4>
              <p className="text-sm">اعتماد على النفط</p>
            </Card>
            <Card className="p-4 flex flex-col items-center text-center col-span-2">
              <Globe className="h-10 w-10 text-sabic-tertiary mb-2" />
              <h4 className="font-bold mb-1">الاقتصاد الأخضر</h4>
              <p className="text-sm">تحديات وفرص مستقبلية</p>
            </Card>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide1;
