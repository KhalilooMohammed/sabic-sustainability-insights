
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Lightbulb, Beaker, Leaf } from "lucide-react";

const Slide7 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="استراتيجية التميز التكنولوجي" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md border-r-4 border-sabic-primary">
            <div className="flex items-start">
              <Lightbulb className="h-10 w-10 text-sabic-primary ml-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">الابتكار المنتج</h3>
                <p className="text-gray-800 mb-4">
                  تطوير بوليمرات قابلة للتحلل بالتعاون مع معهد الملك عبدالله لتقنية النانو.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-md border-r-2 border-sabic-secondary">
                  <h4 className="font-bold mb-2">الميزات الرئيسية</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-sabic-secondary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                      <span>قابلية التحلل الحيوي خلال 12 شهرًا بدلًا من مئات السنين</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-sabic-secondary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                      <span>الحفاظ على الخصائص الميكانيكية للبوليمرات التقليدية</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-sabic-secondary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                      <span>إمكانية استخدامها في التغليف والمنسوجات والسيارات</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 mb-6 bg-white shadow-md border-r-4 border-sabic-tertiary">
            <div className="flex items-start">
              <Leaf className="h-10 w-10 text-sabic-tertiary ml-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">الابتكار البيئي</h3>
                <p className="text-gray-800 mb-4">
                  اعتماد تقنيات CCUS (احتجاز وتخزين الكربون) لخفض الانبعاثات بنسبة 30% بحلول 2026.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-md border-r-2 border-sabic-tertiary">
                  <h4 className="font-bold mb-2">المراحل التنفيذية</h4>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="ml-3 h-6 w-6 rounded-full bg-sabic-light flex items-center justify-center text-sabic-primary font-bold">1</div>
                      <p>تركيب أنظمة الاحتجاز في مصانع الجبيل (2024)</p>
                    </div>
                    <div className="flex">
                      <div className="ml-3 h-6 w-6 rounded-full bg-sabic-light flex items-center justify-center text-sabic-primary font-bold">2</div>
                      <p>توسيع النطاق إلى مصانع ينبع (2025)</p>
                    </div>
                    <div className="flex">
                      <div className="ml-3 h-6 w-6 rounded-full bg-sabic-light flex items-center justify-center text-sabic-primary font-bold">3</div>
                      <p>تنفيذ كامل لجميع المرافق العالمية (2026)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-5 mb-6 bg-sabic-light">
            <h3 className="text-xl font-bold mb-5 text-center">الميزة الاستراتيجية</h3>
            
            <div className="mb-6">
              <h4 className="font-bold mb-3 flex items-center text-sabic-primary">
                <Beaker className="h-5 w-5 ml-2" />
                المواءمة مع الموارد
              </h4>
              <div className="p-4 bg-white rounded-md">
                <p>تستفيد استراتيجية التميز التكنولوجي من نقاط القوة الحالية لشركة سابك، خاصةً:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>1200 براءة اختراع في مجال البوليمرات</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>خبرة 40+ عاماً في الصناعة</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>شراكات مع مراكز البحث العلمي</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 flex items-center text-sabic-primary">
                <Users2 className="h-5 w-5 ml-2" />
                المواءمة مع احتياجات السوق
              </h4>
              <div className="p-4 bg-white rounded-md">
                <p>تلبي هذه الاستراتيجية متطلبات السوق المتزايدة من حيث:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>تشريعات البيئة والاستدامة العالمية</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>طلب المستهلكين المتزايد على المنتجات الخضراء</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                    <span>التزام عملاء سابك الرئيسيين (مثل تسلا وأمازون) بمعايير بيئية صارمة</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-sabic-primary rounded-md text-white text-center">
              <p className="font-bold">نتيجة متوقعة: زيادة الحصة السوقية بنسبة 15% في قطاع المنتجات المستدامة بحلول 2027</p>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Slide7;

import { Users2 } from "lucide-react";
