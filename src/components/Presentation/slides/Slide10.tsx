
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Network, Users, Layers, BarChart3 } from "lucide-react";
import { ListItem } from "@/components/Presentation/ListItem";

const Slide10 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="تنفيذ الاستراتيجية – الهيكل والرقابة" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
        <div className="flex flex-col gap-3">
          <Card className="p-3 bg-white shadow-md flex-1 overflow-hidden">
            <h3 className="text-lg font-bold mb-2 flex items-center text-sabic-primary">
              <Network className="h-5 w-5 ml-2" />
              هيكل جديد
            </h3>
            
            <div className="flex flex-col items-center justify-center mb-2">
              <img 
                src="/lovable-uploads/03ed52c6-6906-4d07-8ea1-49c60b6f0a09.png" 
                alt="الهيكل التنظيمي للاستدامة" 
                className="max-h-32 w-auto"
              />
            </div>
            
            <div className="bg-sabic-light p-2 rounded-lg">
              <h4 className="font-bold mb-1 text-sm flex items-center">
                <Users className="h-4 w-4 ml-1" />
                المسؤوليات الرئيسية
              </h4>
              <ul className="space-y-1 text-xs">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-1 mt-1 flex-shrink-0"></div>
                  <p>وضع الأهداف الاستراتيجية للاستدامة</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-1 mt-1 flex-shrink-0"></div>
                  <p>تخصيص الموارد وتنسيق الجهود</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-1 mt-1 flex-shrink-0"></div>
                  <p>رفع التقارير الدورية لمجلس الإدارة</p>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        
        <div className="flex flex-col gap-3">
          <Card className="p-3 bg-white shadow-md mb-1.5">
            <h3 className="text-lg font-bold mb-2 flex items-center text-sabic-primary">
              <BarChart3 className="h-5 w-5 ml-2" />
              مؤشرات الأداء
            </h3>
            
            <div className="space-y-2">
              <div className="bg-gray-50 p-2 rounded-lg border-r-3 border-green-500">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <h4 className="font-bold">خفض الانبعاثات</h4>
                  <span className="bg-green-100 text-green-800 py-0.5 px-1 rounded text-xs">الهدف: 5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between mt-0.5 text-xs">
                  <span>الإنجاز: 3.2%</span>
                  <span>65%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-r-3 border-blue-500">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <h4 className="font-bold">الشراكات الخضراء</h4>
                  <span className="bg-blue-100 text-blue-800 py-0.5 px-1 rounded text-xs">الهدف: 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <div className="flex justify-between mt-0.5 text-xs">
                  <span>الإنجاز: 1</span>
                  <span>33%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-r-3 border-purple-500">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <h4 className="font-bold">نمو المنتجات المستدامة</h4>
                  <span className="bg-purple-100 text-purple-800 py-0.5 px-1 rounded text-xs">الهدف: 15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between mt-0.5 text-xs">
                  <span>الإنجاز: 12%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-3 bg-sabic-light">
            <h3 className="font-bold mb-1 flex items-center text-sm">
              <Layers className="h-4 w-4 ml-2" />
              تقسيم المسؤوليات
            </h3>
            
            <div className="flex flex-col space-y-1 text-xs">
              <div className="grid grid-cols-5 bg-sabic-primary text-white p-1 rounded-t-md">
                <div className="font-bold col-span-2">الإدارة</div>
                <div className="font-bold col-span-3">المسؤولية</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-1">
                <div className="font-bold col-span-2">البحث والتطوير</div>
                <div className="col-span-3">تطوير منتجات مستدامة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-1">
                <div className="font-bold col-span-2">العمليات</div>
                <div className="col-span-3">كفاءة الطاقة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-1">
                <div className="font-bold col-span-2">سلسلة الإمداد</div>
                <div className="col-span-3">معايير الاستدامة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-1 rounded-b-md">
                <div className="font-bold col-span-2">الموارد البشرية</div>
                <div className="col-span-3">بناء القدرات</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Slide10;
