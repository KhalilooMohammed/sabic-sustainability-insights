
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { Goal, BarChart, Lightbulb } from "lucide-react";

const Slide3 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="الأهداف الذكية المقترحة لتطوير استراتيجية سابك" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-6">
        <div className="mb-4 flex items-center">
          <Goal className="h-10 w-10 text-sabic-primary ml-4" />
          <h3 className="text-2xl font-bold">الأهداف وفق معيار SMART</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="p-5 bg-white shadow-lg border-t-4 border-sabic-primary hover:shadow-xl transition-shadow">
            <div className="mb-3 text-center">
              <span className="inline-block p-2 bg-sabic-light rounded-full">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <h4 className="text-lg font-bold mb-3 text-center">تقليل انبعاثات غازات الدفيئة</h4>
            <div className="flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-sabic-primary">20%</span>
              <span className="mx-2 text-gray-500">بحلول</span>
              <span className="text-lg font-bold text-sabic-secondary">2030</span>
            </div>
            <p className="text-gray-600 text-center text-sm">مقارنة بمستويات عام 2020</p>
          </Card>
          
          <Card className="p-5 bg-white shadow-lg border-t-4 border-sabic-secondary hover:shadow-xl transition-shadow">
            <div className="mb-3 text-center">
              <span className="inline-block p-2 bg-sabic-light rounded-full">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 16.008H3.5" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 16.008V7.008" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16.008V10.008" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 16.008V13.008" stroke="#00A651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <h4 className="text-lg font-bold mb-3 text-center">رفع نسبة المنتجات المستندة إلى الاقتصاد الدائري</h4>
            <div className="flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-sabic-primary">30%</span>
              <span className="mx-2 text-gray-500">بحلول</span>
              <span className="text-lg font-bold text-sabic-secondary">2030</span>
            </div>
            <p className="text-gray-600 text-center text-sm">من إجمالي المنتجات المصنعة</p>
          </Card>
          
          <Card className="p-5 bg-white shadow-lg border-t-4 border-sabic-tertiary hover:shadow-xl transition-shadow">
            <div className="mb-3 text-center">
              <span className="inline-block p-2 bg-sabic-light rounded-full">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#009AC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#009AC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#009AC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#009AC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <h4 className="text-lg font-bold mb-3 text-center">التعاون مع شركات ناشئة في مجال الطاقة المتجددة</h4>
            <div className="flex items-center justify-center mb-3">
              <span className="text-lg font-bold text-sabic-primary">3</span>
              <span className="mx-2 text-gray-500">شركات بحلول</span>
              <span className="text-lg font-bold text-sabic-secondary">2025</span>
            </div>
            <p className="text-gray-600 text-center text-sm">لتطوير حلول مبتكرة في مجال الطاقة</p>
          </Card>
        </div>
        
        <div className="mt-6 bg-gray-50 rounded-lg p-5">
          <div className="flex items-start">
            <Lightbulb className="h-6 w-6 text-sabic-primary ml-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">المبررات</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-3 mt-1"></div>
                  <p>تساعد هذه الأهداف في الاستجابة للتشريعات الدولية مثل اتفاق باريس للمناخ والمتطلبات البيئية المتزايدة.</p>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-3 mt-1"></div>
                  <p>تُظهر التزامًا فعليًا من سابك نحو مستقبل منخفض الكربون وتحقيق التنمية المستدامة.</p>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-3 mt-1"></div>
                  <p>تعزز التنافسية وتعكس استعداد سابك للتحول الاستراتيجي بعيدًا عن الاعتماد المفرط على النفط.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide3;
