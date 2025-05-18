
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Handshake, Building, BarChart3, AlertTriangle, CheckCircle2 } from "lucide-react";

const Slide9 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="استراتيجية التحالفات الاستراتيجية – شراكات خضراء" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md border-r-4 border-blue-500">
            <div className="flex items-start">
              <div className="ml-4 p-2 rounded-full bg-blue-100">
                <Building className="h-8 w-8 text-blue-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">التحالف مع نيوم</h3>
                <p className="mb-3 text-gray-700">
                  بناء مصنع بتكلفة 500 مليون دولار يعمل بالطاقة الشمسية بالكامل.
                </p>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-700">تفاصيل المشروع:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>مساحة المصنع: 300,000 متر مربع</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>الطاقة الإنتاجية: 200,000 طن سنويًا</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-blue-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>تاريخ بدء التشغيل: الربع الأول 2026</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 mb-6 bg-white shadow-md border-r-4 border-green-500">
            <div className="flex items-start">
              <div className="ml-4 p-2 rounded-full bg-green-100">
                <Handshake className="h-8 w-8 text-green-600 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">مشروع الجبيل</h3>
                <p className="mb-3 text-gray-700">
                  بناء مصنع إعادة تدوير بالشراكة مع شركة دائر المحلية، مدعوم من صندوق الاستثمارات العامة.
                </p>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-700">تفاصيل المشروع:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-green-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>الاستثمار: 200 مليون دولار</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-green-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>القدرة: إعادة تدوير 120,000 طن من البلاستيك سنويًا</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-green-500 rounded-full ml-2 mt-2 flex-shrink-0"></div>
                      <span>مناصب العمل: 300 وظيفة مباشرة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-500 ml-2" />
              التحديات
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 rounded-md">
                <h4 className="font-bold mb-2">تقلب أسعار المواد المعاد تدويرها</h4>
                <p className="text-gray-700">تذبذب أسعار المواد الخام المعاد تدويرها يشكل تحديًا للتخطيط المالي طويل المدى للمشاريع.</p>
              </div>
              
              <div className="p-3 bg-amber-50 rounded-md">
                <h4 className="font-bold mb-2">جودة المواد المعاد تدويرها</h4>
                <p className="text-gray-700">ضمان جودة متسقة للمنتجات المصنعة من مواد معاد تدويرها.</p>
              </div>
              
              <div className="p-3 bg-amber-50 rounded-md">
                <h4 className="font-bold mb-2">تستلزم دعمًا حكوميًا</h4>
                <p className="text-gray-700">تكلفة الإنتاج المرتفعة تتطلب حوافز حكومية لتحقيق جدوى اقتصادية في المراحل الأولى.</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 bg-sabic-light">
            <h3 className="text-xl font-bold mb-4 flex items-center text-sabic-primary">
              <CheckCircle2 className="h-6 w-6 ml-2" />
              الفوائد المتوقعة
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <BarChart3 className="h-6 w-6 text-sabic-primary ml-2" />
                <h4 className="font-bold">خفض الانبعاثات بنسبة 40%</h4>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-sabic-primary h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              
              <p className="text-gray-600 text-sm">مقارنة بخط الأساس لعام 2020، مما يسهم في تحقيق أهداف الحياد الكربوني.</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>تعزيز صورة سابك البيئية وسمعتها كشركة مسؤولة اجتماعيًا.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>الامتثال المبكر للتشريعات البيئية المستقبلية وتجنب الغرامات.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>فتح أسواق جديدة للعملاء الملتزمين بمعايير بيئية صارمة.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>نقل المعرفة والتكنولوجيا من خلال الشراكات الاستراتيجية.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Slide9;
