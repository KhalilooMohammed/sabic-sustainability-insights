
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { MessageSquareQuote, CheckCircle2, XCircle, EyeIcon, Factory } from "lucide-react";
import ListItem from "../ListItem";

const Slide2 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="تحليل رسالة ورؤية سابك – مكامن القوة والضعف" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 border-sabic-primary bg-white shadow-md">
            <div className="flex items-start">
              <MessageSquareQuote className="h-7 w-7 text-sabic-primary ml-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">الرسالة</h3>
                <p className="italic text-gray-700 border-r-2 border-sabic-secondary pr-3 my-2">
                  "تقديم منتجات وخدمات عالية الجودة من خلال الابتكار والتفوق في عملياتنا التشغيلية، مع تحقيق تطلعات جميع الجهات المتعاملة معنا."
                </p>
              </div>
            </div>
            
            <div className="mt-5">
              <h4 className="font-bold mb-2 flex items-center text-green-600">
                <CheckCircle2 className="h-5 w-5 ml-2" />
                نقاط القوة
              </h4>
              <ul className="space-y-2">
                <ListItem type="arrow">
                  شهادة ISO 9001 تعزز التزام الشركة بمعايير الجودة العالمية.
                </ListItem>
                <ListItem type="arrow">
                  تحسين كفاءة استخدام الطاقة بنسبة 8.2% بين عامي 2015 و2022.
                </ListItem>
              </ul>
            </div>
            
            <div className="mt-4">
              <h4 className="font-bold mb-2 flex items-center text-red-600">
                <XCircle className="h-5 w-5 ml-2" />
                نقاط الضعف
              </h4>
              <ul className="space-y-2">
                <ListItem type="arrow">
                  غياب أهداف رقمية واضحة (مثل نسب خفض الانبعاثات سنويًا).
                </ListItem>
                <ListItem type="arrow">
                  تقييم "فضي" من EcoVadis في الاستدامة 2023 يدل على تباين في المعايير بين مصانع الشركة.
                </ListItem>
              </ul>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-5 mb-5 border-sabic-primary bg-white shadow-md">
            <div className="flex items-start">
              <EyeIcon className="h-7 w-7 text-sabic-primary ml-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">الرؤية</h3>
                <p className="italic text-gray-700 border-r-2 border-sabic-secondary pr-3 my-2">
                  "أن نصبح الشركة العالمية الرائدة المفضلة في مجال الكيماويات."
                </p>
                <div className="mt-2 text-gray-600">
                  <p>الرؤية طموحة لكنها تفتقر لآليات تنفيذ عملية.</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="p-5 border rounded-md bg-gray-50">
            <h3 className="text-lg font-bold mb-3 text-sabic-primary flex items-center">
              <Factory className="h-5 w-5 ml-2" />
              مقارنة بالمنافسين
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 border-r-2 border-blue-500">
                <h4 className="font-bold">باسف:</h4>
                <p>تخطط لخفض الانبعاثات 25% بحلول 2030، باستثمار 4.5 مليار يورو سنويًا.</p>
              </div>
              
              <div className="p-3 border-r-2 border-green-500">
                <h4 className="font-bold">داو:</h4>
                <p>أطلقت 11 منتجًا صديقًا للبيئة في عام 2023 وحده.</p>
              </div>
            </div>
            
            <div className="mt-5 p-3 bg-sabic-light rounded-md">
              <h4 className="font-bold text-sabic-primary mb-2">التوصية:</h4>
              <p>يجب إضافة هدف رقمي طموح، مثل أن يصبح أحد منتجات سابك ضمن أفضل المنتجات عالميًا بحلول 2030.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide2;
