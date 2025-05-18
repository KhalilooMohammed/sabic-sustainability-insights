
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Lightbulb, Globe, Star } from "lucide-react";

const Slide12 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  return (
    <Slide title="الخلاصة والتوصيات النهائية" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-5 bg-sabic-light rounded-lg">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-sabic-primary ml-3" />
            <h3 className="text-xl font-bold">تمتلك سابك إمكانات ضخمة للريادة في الاقتصاد الأخضر</h3>
          </div>
          
          <p className="mb-4">
            استنادًا إلى التحليلات السابقة، يتضح أن شركة سابك تمتلك قدرات ومقومات تؤهلها لتبوء مكانة قيادية في الاقتصاد الأخضر العالمي، كإحدى الشركات الرائدة في صناعة البتروكيماويات المستدامة.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <TrendingUp className="h-6 w-6 text-sabic-primary ml-2" />
              <h4 className="font-bold">تسريع التحول التكنولوجي</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">تعزيز الاستثمار في تقنيات CCUS وأنظمة إدارة الطاقة</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">تطبيق الذكاء الاصطناعي في تحسين كفاءة العمليات</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">تبني منهجية "الهندسة الخضراء" في تصميم المنتجات</p>
              </li>
            </ul>
          </Card>
          
          <Card className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-sabic-tertiary ml-2" />
              <h4 className="font-bold">تعزيز البنية التحتية الخضراء</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">تحويل مصانع سابك للعمل بالطاقة المتجددة بنسبة 50% بحلول 2030</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">إنشاء وحدات متخصصة لإعادة التدوير في جميع المجمعات الصناعية</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">تطوير أنظمة لوجستية منخفضة الكربون لنقل المنتجات</p>
              </li>
            </ul>
          </Card>
          
          <Card className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <Globe className="h-6 w-6 text-sabic-primary ml-2" />
              <h4 className="font-bold">التوسع العالمي المدروس</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">استهداف الأسواق الآسيوية النامية ذات الطلب المتزايد</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">الاستحواذ على شركات ناشئة مبتكرة في مجال التكنولوجيا الخضراء</p>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-sabic-secondary mt-1 ml-2 flex-shrink-0" />
                <p className="text-sm">إنشاء مراكز ابتكار متخصصة في المناطق الرئيسية عالميًا</p>
              </li>
            </ul>
          </Card>
        </div>
        
        <Card className="p-5 bg-white shadow-md">
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-amber-500 ml-3" />
            <h3 className="text-xl font-bold">مفاتيح المستقبل</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sabic-light p-4 rounded-lg text-center">
              <div className="mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold mb-2">التحالفات الاستراتيجية</h4>
              <p className="text-sm">تعزيز الشراكات مع الشركات الرائدة في التكنولوجيا النظيفة والجامعات ومراكز البحث العالمية.</p>
            </div>
            
            <div className="bg-sabic-light p-4 rounded-lg text-center">
              <div className="mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 14.25V11.625C19.5 9.76104 18.7625 7.9732 17.4497 6.6604C16.1368 5.3476 14.349 4.61011 12.4851 4.61011C10.6211 4.61011 8.83327 5.3476 7.52043 6.6604C6.20759 7.9732 5.47009 9.76104 5.47009 11.625V14.25" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.47009 15.375V19.125C5.47009 19.28 5.40393 19.4284 5.28674 19.5355C5.16955 19.6426 5.00645 19.6993 4.8359 19.6993C4.66536 19.6993 4.50225 19.6426 4.38506 19.5355C4.26788 19.4284 4.20172 19.28 4.20172 19.125V16.5007C3.71703 16.5007 3.25193 16.3139 2.90973 15.9809C2.56752 15.6479 2.375 15.197 2.375 14.7271V13.2729C2.375 12.803 2.56752 12.3521 2.90973 12.0191C3.25193 11.6861 3.71703 11.4993 4.20172 11.4993H5.45834" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5299 15.375V19.125C19.5299 19.28 19.5961 19.4284 19.7133 19.5355C19.8305 19.6426 19.9936 19.6993 20.1641 19.6993C20.3346 19.6993 20.4978 19.6426 20.6149 19.5355C20.7321 19.4284 20.7983 19.28 20.7983 19.125V16.5007C21.283 16.5007 21.7481 16.3139 22.0903 15.9809C22.4325 15.6479 22.625 15.197 22.625 14.7271V13.2729C22.625 12.803 22.4325 12.3521 22.0903 12.0191C21.7481 11.6861 21.283 11.4993 20.7983 11.4993H19.5417" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold mb-2">الاستثمار في البحث والتطوير</h4>
              <p className="text-sm">زيادة ميزانية البحث والتطوير إلى 3% من الإيرادات وتركيزها على حلول الاستدامة المبتكرة.</p>
            </div>
            
            <div className="bg-sabic-light p-4 rounded-lg text-center">
              <div className="mb-3">
                <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7Z" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V18C22 16.9835 21.5259 16.0093 20.682 15.3504C19.8381 14.6915 18.6935 14.3856 17.539 14.4971L9 22ZM9 22C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20V17L3 14L2 11L6 12L9 9L13 13L9 17V22Z" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-bold mb-2">تحسين الكفاءة</h4>
              <p className="text-sm">تطبيق أحدث تقنيات الذكاء الاصطناعي وإنترنت الأشياء لرفع كفاءة العمليات وخفض التكاليف.</p>
            </div>
          </div>
          
          <div className="mt-6 bg-sabic-primary p-4 rounded-lg text-white text-center">
            <p className="mb-1">بتنفيذ هذه التوصيات، يمكن لسابك أن تتحول من:</p>
            <div className="flex items-center justify-center mt-2">
              <span className="px-3 py-1 bg-white text-sabic-primary font-bold rounded-md">شركة بتروكيماويات تقليدية</span>
              <span className="mx-3">إلى</span>
              <span className="px-3 py-1 bg-white text-sabic-primary font-bold rounded-md">رائد عالمي في الاقتصاد الأخضر</span>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default Slide12;
