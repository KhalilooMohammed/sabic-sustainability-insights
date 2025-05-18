
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Gauge, Users, Factory, Swords } from "lucide-react";

const Slide4 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  const forceLevel = (level: string) => {
    const levels = {
      "منخفض جدًا": [1, "bg-green-100 text-green-800"],
      "متوسطة": [3, "bg-yellow-100 text-yellow-800"],
      "مرتفع": [4, "bg-orange-100 text-orange-800"],
      "مرتفعة": [4, "bg-orange-100 text-orange-800"],
      "شديدة": [5, "bg-red-100 text-red-800"],
    };
    
    return levels[level as keyof typeof levels] || [3, "bg-gray-100 text-gray-800"];
  };

  return (
    <Slide title="نموذج بورتر للقوى الخمس – قراءة تنافسية دقيقة" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Card className="p-4 flex-1 bg-white shadow-md">
            <div className="flex items-center mb-3">
              <TrendingDown className="h-6 w-6 text-green-600 ml-3" />
              <h3 className="font-bold">تهديد الداخلين الجدد</h3>
              <span className={`mr-auto py-1 px-3 text-sm rounded-full ${forceLevel("منخفض جدًا")[1]}`}>
                منخفض جدًا
              </span>
            </div>
            <p className="text-gray-700">تكلفة تأسيس مصنع بتروكيماوي تصل إلى 5 مليارات دولار، مما يشكل عائقًا كبيرًا أمام دخول منافسين جدد للسوق.</p>
          </Card>
          
          <Card className="p-4 flex-1 bg-white shadow-md">
            <div className="flex items-center mb-3">
              <TrendingUp className="h-6 w-6 text-red-600 ml-3" />
              <h3 className="font-bold">تهديد المنتجات البديلة</h3>
              <span className={`mr-auto py-1 px-3 text-sm rounded-full ${forceLevel("مرتفع")[1]}`}>
                مرتفع
              </span>
            </div>
            <p className="text-gray-700">نمو استخدام البلاستيك الحيوي والمواد المعاد تدويرها، خاصة في أوروبا حيث تشكل حاليًا 12% من السوق وفي تزايد مستمر.</p>
          </Card>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Card className="p-4 flex-1 bg-white shadow-md">
            <div className="flex items-center mb-3">
              <Gauge className="h-6 w-6 text-yellow-600 ml-3" />
              <h3 className="font-bold">قوة الموردين</h3>
              <span className={`mr-auto py-1 px-3 text-sm rounded-full ${forceLevel("متوسطة")[1]}`}>
                متوسطة
              </span>
            </div>
            <p className="text-gray-700">تعتمد سابك بشكل كبير على أرامكو (70%) كمورد رئيسي للمواد الخام، مما يعرض الشركة لتقلبات في التوريد والأسعار.</p>
          </Card>
          
          <Card className="p-4 flex-1 bg-white shadow-md">
            <div className="flex items-center mb-3">
              <Users className="h-6 w-6 text-orange-600 ml-3" />
              <h3 className="font-bold">قوة المشترين</h3>
              <span className={`mr-auto py-1 px-3 text-sm rounded-full ${forceLevel("مرتفعة")[1]}`}>
                مرتفعة
              </span>
            </div>
            <div className="text-gray-700">
              <p className="mb-2">شركات كبرى مثل تسلا وأمازون وفورد تملك نفوذ تفاوضي قوي مع موردي البتروكيماويات.</p>
              <p className="text-sm bg-gray-50 p-2 rounded">مثال: خفضت فورد طلباتها من سابك بنسبة 10% عام 2022 لصالح موردين يقدمون منتجات أكثر استدامة.</p>
            </div>
          </Card>
        </div>
        
        <Card className="p-4 bg-white shadow-md">
          <div className="flex items-center mb-3">
            <Swords className="h-6 w-6 text-red-600 ml-3" />
            <h3 className="font-bold">حدة المنافسة</h3>
            <span className={`mr-auto py-1 px-3 text-sm rounded-full ${forceLevel("شديدة")[1]}`}>
              شديدة
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border-r-2 border-blue-400">
              <h4 className="font-bold text-blue-700">داو</h4>
              <p className="text-sm text-gray-700">تخفض أسعارها باستمرار وتطلق حوالي 70 منتجًا جديدًا سنويًا، مما يزيد الضغط التنافسي على سابك.</p>
            </div>
            <div className="p-3 border-r-2 border-green-400">
              <h4 className="font-bold text-green-700">باسف</h4>
              <p className="text-sm text-gray-700">تستثمر باستمرار في الابتكار البيئي والتقنيات المستدامة، مما يعزز موقعها التنافسي في سوق المنتجات الخضراء.</p>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default Slide4;
