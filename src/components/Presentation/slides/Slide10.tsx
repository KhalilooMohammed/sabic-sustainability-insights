
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Network, Users, Layers, BarChart3 } from "lucide-react";

const Slide10 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="تنفيذ الاستراتيجية – الهيكل والرقابة" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-5 flex items-center text-sabic-primary">
              <Network className="h-6 w-6 ml-3" />
              هيكل جديد
            </h3>
            
            <div className="relative py-8">
              {/* Top level */}
              <div className="flex justify-center mb-8">
                <div className="border-2 border-sabic-primary bg-sabic-light p-3 rounded-lg w-64 text-center">
                  <h4 className="font-bold">لجنة الاستدامة</h4>
                  <p className="text-sm">تابعة لمجلس الإدارة</p>
                </div>
              </div>
              
              {/* Line down from board */}
              <div className="absolute h-8 w-0.5 bg-gray-300 top-16 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Middle level - CSO */}
              <div className="flex justify-center mb-8">
                <div className="border-2 border-sabic-secondary bg-white p-3 rounded-lg w-64 text-center">
                  <h4 className="font-bold">مدير تنفيذي للاستدامة</h4>
                  <p className="text-sm">(Chief Sustainability Officer)</p>
                </div>
              </div>
              
              {/* Line down from CSO */}
              <div className="absolute h-8 w-0.5 bg-gray-300 top-32 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Lower level - teams */}
              <div className="flex justify-between">
                <div className="border border-gray-300 bg-gray-50 p-2 rounded-lg w-28 text-center">
                  <h5 className="font-bold">فريق الابتكار</h5>
                </div>
                <div className="border border-gray-300 bg-gray-50 p-2 rounded-lg w-28 text-center">
                  <h5 className="font-bold">فريق الكفاءة</h5>
                </div>
                <div className="border border-gray-300 bg-gray-50 p-2 rounded-lg w-28 text-center">
                  <h5 className="font-bold">فريق الشراكات</h5>
                </div>
              </div>
              
              {/* Lines connecting CSO to teams */}
              <div className="absolute w-3/4 h-0.5 bg-gray-300 top-40 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute h-4 w-0.5 bg-gray-300 top-40 left-1/4 transform -translate-x-1/2"></div>
              <div className="absolute h-4 w-0.5 bg-gray-300 top-40 left-3/4 transform -translate-x-1/2"></div>
            </div>
            
            <div className="mt-4 bg-sabic-light p-4 rounded-lg">
              <h4 className="font-bold mb-3 flex items-center">
                <Users className="h-5 w-5 ml-2" />
                المسؤوليات الرئيسية
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                  <p>وضع الأهداف الاستراتيجية للاستدامة ومتابعة تنفيذها</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                  <p>تخصيص الموارد وتنسيق الجهود بين الإدارات المختلفة</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-2 flex-shrink-0"></div>
                  <p>رفع التقارير الدورية لمجلس الإدارة وأصحاب المصلحة</p>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-5 mb-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center text-sabic-primary">
              <BarChart3 className="h-6 w-6 ml-3" />
              مؤشرات الأداء
            </h3>
            
            <div className="space-y-5">
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">خفض الانبعاثات سنويًا</h4>
                  <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded">الهدف: 5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>الإنجاز الحالي: 3.2%</span>
                  <span>65%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">عدد الشراكات الخضراء</h4>
                  <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">الهدف: 3 بحلول 2025</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>الإنجاز الحالي: 1</span>
                  <span>33%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">نمو الإيرادات من المنتجات المستدامة</h4>
                  <span className="text-sm bg-purple-100 text-purple-800 py-1 px-2 rounded">الهدف: 15% سنويًا</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>الإنجاز الحالي: 12%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 bg-sabic-light">
            <h3 className="font-bold mb-4 flex items-center">
              <Layers className="h-5 w-5 ml-2" />
              تقسيم المسؤوليات
            </h3>
            
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-5 bg-sabic-primary text-white p-2 rounded-t-md">
                <div className="font-bold col-span-2">الإدارة</div>
                <div className="font-bold col-span-3">المسؤولية</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-2 text-sm">
                <div className="font-bold col-span-2">البحث والتطوير</div>
                <div className="col-span-3">تطوير منتجات مستدامة وتقنيات الاحتجاز</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-2 text-sm">
                <div className="font-bold col-span-2">العمليات</div>
                <div className="col-span-3">تنفيذ مبادرات كفاءة استخدام الطاقة</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-2 text-sm">
                <div className="font-bold col-span-2">سلسلة الإمداد</div>
                <div className="col-span-3">اعتماد معايير الاستدامة مع الموردين</div>
              </div>
              
              <div className="grid grid-cols-5 bg-gray-50 p-2 text-sm">
                <div className="font-bold col-span-2">التسويق</div>
                <div className="col-span-3">تسويق المنتجات الخضراء والتواصل مع العملاء</div>
              </div>
              
              <div className="grid grid-cols-5 bg-white p-2 text-sm rounded-b-md">
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
