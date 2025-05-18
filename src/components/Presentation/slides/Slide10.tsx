
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Network, Users, Layers, BarChart3 } from "lucide-react";
import { ListItem } from "@/components/Presentation/ListItem";

const Slide10 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="تنفيذ الاستراتيجية – الهيكل والرقابة" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
        <div className="flex flex-col gap-5">
          <Card className="p-4 bg-white shadow-md flex-1">
            <h3 className="text-lg font-bold mb-3 flex items-center text-sabic-primary">
              <Network className="h-5 w-5 ml-2" />
              هيكل جديد
            </h3>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/03ed52c6-6906-4d07-8ea1-49c60b6f0a09.png" 
                alt="الهيكل التنظيمي للاستدامة" 
                className="mx-auto max-h-60 w-auto"
              />
            </div>
            
            <div className="mt-3 bg-sabic-light p-3 rounded-lg">
              <h4 className="font-bold mb-2 flex items-center">
                <Users className="h-4 w-4 ml-2" />
                المسؤوليات الرئيسية
              </h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <p>وضع الأهداف الاستراتيجية للاستدامة ومتابعة تنفيذها</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <p>تخصيص الموارد وتنسيق الجهود بين الإدارات المختلفة</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <p>رفع التقارير الدورية لمجلس الإدارة وأصحاب المصلحة</p>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        
        <div className="flex flex-col gap-5">
          <Card className="p-4 bg-white shadow-md mb-3">
            <h3 className="text-lg font-bold mb-3 flex items-center text-sabic-primary">
              <BarChart3 className="h-5 w-5 ml-2" />
              مؤشرات الأداء
            </h3>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg border-r-3 border-green-500">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm">خفض الانبعاثات سنويًا</h4>
                  <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded">الهدف: 5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>الإنجاز الحالي: 3.2%</span>
                  <span>65%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg border-r-3 border-blue-500">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm">عدد الشراكات الخضراء</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 py-0.5 px-2 rounded">الهدف: 3 بحلول 2025</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>الإنجاز الحالي: 1</span>
                  <span>33%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg border-r-3 border-purple-500">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm">نمو الإيرادات من المنتجات المستدامة</h4>
                  <span className="text-xs bg-purple-100 text-purple-800 py-0.5 px-2 rounded">الهدف: 15% سنويًا</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs">
                  <span>الإنجاز الحالي: 12%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-sabic-light">
            <h3 className="font-bold mb-2 flex items-center">
              <Layers className="h-4 w-4 ml-2" />
              تقسيم المسؤوليات
            </h3>
            
            <div className="flex flex-col space-y-1 text-xs">
              <div className="grid grid-cols-5 bg-sabic-primary text-white p-2 rounded-t-md">
                <div className="font-bold col-span-2">الإدارة</div>
                <div className="font-bold col-span-3">المسؤولية</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-1.5">
                <div className="font-bold col-span-2">البحث والتطوير</div>
                <div className="col-span-3">تطوير منتجات مستدامة وتقنيات الاحتجاز</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-1.5">
                <div className="font-bold col-span-2">العمليات</div>
                <div className="col-span-3">تنفيذ مبادرات كفاءة استخدام الطاقة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-1.5">
                <div className="font-bold col-span-2">سلسلة الإمداد</div>
                <div className="col-span-3">اعتماد معايير الاستدامة مع الموردين</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-1.5">
                <div className="font-bold col-span-2">التسويق</div>
                <div className="col-span-3">تسويق المنتجات الخضراء والتواصل مع العملاء</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-1.5 rounded-b-md">
                <div className="font-bold col-span-2">الموارد البشرية</div>
                <div className="col-span-3">استقطاب الكفاءات وبناء القدرات</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Slide10;
