
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { LineChart, BarChart, Gauge, LayoutDashboard, FileSpreadsheet, UserCog } from "lucide-react";

const Slide11 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="أدوات المتابعة والتقييم" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <div className="flex items-center mb-4">
              <LayoutDashboard className="h-8 w-8 text-sabic-primary ml-3" />
              <h3 className="text-xl font-bold">لوحات تحكم رقمية (Dashboards)</h3>
            </div>
            
            <div className="bg-sabic-light p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-3">المؤشرات المتابعة</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-md flex items-center">
                  <LineChart className="h-5 w-5 text-green-600 ml-2" />
                  <span>انبعاثات الغازات الدفيئة</span>
                </div>
                <div className="bg-white p-3 rounded-md flex items-center">
                  <BarChart className="h-5 w-5 text-blue-600 ml-2" />
                  <span>استهلاك الطاقة</span>
                </div>
                <div className="bg-white p-3 rounded-md flex items-center">
                  <Gauge className="h-5 w-5 text-amber-600 ml-2" />
                  <span>نسبة المنتجات المستدامة</span>
                </div>
                <div className="bg-white p-3 rounded-md flex items-center">
                  <LineChart className="h-5 w-5 text-purple-600 ml-2" />
                  <span>عائد الاستثمار البيئي</span>
                </div>
              </div>
            </div>
            
            <div className="border border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex justify-between mb-4">
                <h4 className="font-bold">مثال: متابعة خفض الانبعاثات</h4>
                <div className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">محدث: أسبوعيًا</div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-32 relative mb-3">
                <div className="absolute bottom-0 h-4/6 w-1/6 bg-sabic-primary mx-1" style={{left: '0%'}}></div>
                <div className="absolute bottom-0 h-3/6 w-1/6 bg-sabic-primary mx-1" style={{left: '16.6%'}}></div>
                <div className="absolute bottom-0 h-5/6 w-1/6 bg-sabic-primary mx-1" style={{left: '33.3%'}}></div>
                <div className="absolute bottom-0 h-2/6 w-1/6 bg-sabic-primary mx-1" style={{left: '49.9%'}}></div>
                <div className="absolute bottom-0 h-3/6 w-1/6 bg-sabic-primary mx-1" style={{left: '66.6%'}}></div>
                <div className="absolute bottom-0 h-4/6 w-1/6 bg-sabic-tertiary mx-1" style={{left: '83.3%'}}></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>يناير</span>
                <span>فبراير</span>
                <span>مارس</span>
                <span>أبريل</span>
                <span>مايو</span>
                <span>يونيو</span>
              </div>
              
              <div className="mt-3 flex justify-between text-sm">
                <span>الهدف السنوي: 5% خفض</span>
                <span className="font-bold text-green-700">الإنجاز: 3.2%</span>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="h-8 w-8 text-sabic-primary ml-3" />
              <h3 className="text-xl font-bold">تقارير فصلية لمجلس الإدارة</h3>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">محتويات التقرير النموذجي</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>ملخص تنفيذي عن أداء مبادرات الاستدامة</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>تحليل الفجوة بين الأهداف والإنجاز</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>تحديات التنفيذ والحلول المقترحة</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>آخر المستجدات حول المعايير والتشريعات البيئية</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>ملحق بالمؤشرات التفصيلية لكل قطاع</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center mb-4 mt-6">
              <UserCog className="h-8 w-8 text-sabic-primary ml-3" />
              <h3 className="text-xl font-bold">دمج التقييم البيئي في تقييمات الأداء الوظيفي</h3>
            </div>
            
            <div className="bg-sabic-light p-4 rounded-lg">
              <h4 className="font-bold mb-3">آلية التقييم</h4>
              
              <div className="grid grid-cols-5 bg-white p-2 rounded-md mb-2">
                <div className="font-bold col-span-2">المديرون التنفيذيون</div>
                <div className="col-span-3">15% من التقييم مرتبط بتحقيق أهداف الاستدامة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-2 rounded-md mb-2">
                <div className="font-bold col-span-2">مديرو المصانع</div>
                <div className="col-span-3">20% من التقييم مرتبط بكفاءة استخدام الطاقة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-2 rounded-md">
                <div className="font-bold col-span-2">مهندسو العمليات</div>
                <div className="col-span-3">10% من التقييم مرتبط بابتكار حلول خفض الانبعاثات</div>
              </div>
              
              <div className="mt-4 p-3 bg-white border border-gray-200 rounded-md">
                <p className="text-sm">
                  <strong>ملاحظة:</strong> هذا النظام يعزز المساءلة ويحفز الموظفين على المساهمة الفعالة في تحقيق أهداف الاستدامة، مما يضمن أنها تصبح جزءًا من ثقافة الشركة وليست مجرد مبادرات معزولة.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Slide11;
