
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Clock, ArrowRight } from "lucide-react";

const Slide6 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  const resources = [
    {
      name: "براءات الاختراع",
      value: "ميزة تنافسية مستدامة",
      description: "1200 براءة في البوليمرات خفيفة الوزن.",
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      color: "border-green-500 bg-green-50"
    },
    {
      name: "شبكة التوزيع",
      value: "ضعف نسبي",
      description: "تغطي 40 دولة فقط مقارنة بـ70 لباسف.",
      icon: <XCircle className="h-5 w-5 text-red-600" />,
      color: "border-red-500 bg-red-50"
    },
    {
      name: "البحث والتطوير",
      value: "ميزة مؤقتة",
      description: "استثمار 1.2 مليار دولار سنويًا مقابل 3 مليار لداو.",
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
      color: "border-yellow-500 bg-yellow-50"
    }
  ];

  return (
    <Slide title="تحليل VRIO – الموارد والقدرات التنافسية" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="rtl">
        <table className="w-full mb-8 border-collapse">
          <thead className="bg-sabic-primary text-white">
            <tr>
              <th className="p-3 text-right">المورد/القدرة</th>
              <th className="p-3 text-right">قيّم (V)</th>
              <th className="p-3 text-right">نادر (R)</th>
              <th className="p-3 text-right">صعب التقليد (I)</th>
              <th className="p-3 text-right">مستغل تنظيمياً (O)</th>
              <th className="p-3 text-right">التقييم</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-bold">براءات الاختراع</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 font-bold text-green-700">ميزة تنافسية مستدامة</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3 font-bold">شبكة التوزيع</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-red-600">✗</td>
              <td className="p-3 text-center text-red-600">✗</td>
              <td className="p-3 text-center text-red-600">✗</td>
              <td className="p-3 font-bold text-red-700">ضعف نسبي</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-bold">البحث والتطوير</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 text-center text-red-600">✗</td>
              <td className="p-3 text-center text-green-600">✓</td>
              <td className="p-3 font-bold text-amber-700">ميزة مؤقتة</td>
            </tr>
          </tbody>
        </table>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {resources.map((resource, index) => (
            <Card key={index} className={`p-4 border-r-4 ${resource.color}`}>
              <div className="flex items-center mb-2">
                <div className="ml-2">{resource.icon}</div>
                <h3 className="font-bold">{resource.name}</h3>
              </div>
              <p className="font-medium mb-1">{resource.value}</p>
              <p className="text-sm text-gray-700">{resource.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-5 bg-sabic-light">
          <div className="flex items-start">
            <ArrowRight className="h-6 w-6 text-sabic-primary ml-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">الاستنتاج والتوصية</h3>
              <p className="text-gray-800">
                تحتاج سابك إلى تعزيز قدراتها التنافسية من خلال:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>توسيع شبكتها اللوجستية لتغطية أسواق جديدة خاصة في آسيا وإفريقيا.</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>تكثيف جهود البحث والتطوير لسد الفجوة التكنولوجية مع المنافسين مثل داو وباسف.</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-sabic-primary rounded-full ml-2 mt-1 flex-shrink-0"></div>
                  <span>استغلال ميزتها التنافسية في براءات الاختراع وتحويلها إلى منتجات مستدامة تلبي متطلبات السوق العالمية.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default Slide6;
