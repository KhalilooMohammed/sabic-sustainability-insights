import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Cpu, BarChart3, ChevronDown, TrendingDown } from "lucide-react";
const Slide8 = ({
  slideNumber,
  totalSlides
}: {
  slideNumber: number;
  totalSlides: number;
}) => {
  const aiApplications = [{
    title: "إدارة سلاسل الإمداد",
    description: "تحسين التنبؤ بالطلب وإدارة المخزون بدقة تصل إلى 94%",
    impact: "تخفيض تكاليف التخزين بنسبة 12%"
  }, {
    title: "التنبؤ بالطلب",
    description: "تحليل بيانات السوق ونماذج سلوك العملاء",
    impact: "تقليل الفائض والعجز بنسبة 18%"
  }, {
    title: "التوزيع الذكي",
    description: "تحسين مسارات الشحن وجدولة التسليم",
    impact: "تقليل تكاليف الشحن بنسبة 15%"
  }];
  return <Slide title="استراتيجية خفض التكاليف باستخدام الذكاء الاصطناعي" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <div className="flex items-start">
              <Cpu className="h-10 w-10 text-sabic-primary ml-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">التطبيق: استخدام AI في العمليات</h3>
                <p className="text-gray-700 mb-5">
                  تطبيق تقنيات الذكاء الاصطناعي وتعلم الآلة في جوانب متعددة من سلسلة القيمة لتحسين الكفاءة وتقليل التكاليف.
                </p>
                
                <div className="space-y-4">
                  {aiApplications.map((app, index) => <div key={index} className="border rounded-md overflow-hidden">
                      <div className="bg-gray-50 p-3 font-bold flex items-center justify-between">
                        <span>{app.title}</span>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                      <div className="p-3">
                        <p className="mb-2">{app.description}</p>
                        <div className="bg-sabic-light text-sabic-primary p-2 rounded text-sm font-medium">
                          النتيجة: {app.impact}
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          
          
          <Card className="p-5 bg-sabic-light">
            <h3 className="font-bold text-lg mb-3 text-sabic-primary">الفائدة الاستراتيجية</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>تقوية الربحية والقدرة التنافسية في الأسواق ذات هوامش الربح المنخفضة</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>تحسين الكفاءة دون المساس بجودة المنتج أو التزامات الاستدامة</p>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                <p>توفير موارد مالية إضافية يمكن إعادة استثمارها في مبادرات الاستدامة والابتكار</p>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded-md">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center ml-3 font-bold">!</div>
                <p className="font-medium">ملاحظة هامة: يتطلب تنفيذ هذه الاستراتيجية استثمارًا أوليًا بقيمة 80 مليون دولار واستقطاب كفاءات متخصصة في علوم البيانات.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>;
};
export default Slide8;