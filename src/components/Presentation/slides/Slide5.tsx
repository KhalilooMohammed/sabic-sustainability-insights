
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { LandPlot, BarChart2, Users2, Cpu, Leaf, Scale } from "lucide-react";

const Slide5 = ({ slideNumber, totalSlides }: { slideNumber: number, totalSlides: number }) => {
  const categories = [
    { 
      icon: <LandPlot className="h-6 w-6" />, 
      title: "سياسي", 
      color: "bg-red-50 text-red-700 border-red-200",
      points: [
        "ضرائب كربونية أوروبية اعتبارًا من 2026.",
        "مبادرة \"السعودية الخضراء\" تعزز الاتجاه الوطني نحو الاستدامة."
      ]
    },
    { 
      icon: <BarChart2 className="h-6 w-6" />, 
      title: "اقتصادي", 
      color: "bg-blue-50 text-blue-700 border-blue-200",
      points: [
        "انخفاض أسعار النفط إلى 30 دولار/برميل يقلل الربحية.",
        "نمو سوق البتروكيماويات في آسيا بنسبة 5% سنويًا."
      ]
    },
    { 
      icon: <Users2 className="h-6 w-6" />, 
      title: "اجتماعي", 
      color: "bg-purple-50 text-purple-700 border-purple-200",
      points: [
        "ضغط من منظمات مثل Greenpeace.",
        "85% من الأوروبيين يفضلون المنتجات الصديقة للبيئة."
      ]
    },
    { 
      icon: <Cpu className="h-6 w-6" />, 
      title: "تكنولوجي", 
      color: "bg-orange-50 text-orange-700 border-orange-200",
      points: [
        "تقنيات CCUS تقلل الانبعاثات 50%.",
        "تأخر سابك في تطبيق الذكاء الاصطناعي مقارنة بالمنافسين."
      ]
    },
    { 
      icon: <Leaf className="h-6 w-6" />, 
      title: "بيئي", 
      color: "bg-green-50 text-green-700 border-green-200",
      points: [
        "قوانين تلزم بـ 30% مواد معاد تدويرها في التغليف بحلول 2030."
      ]
    },
    { 
      icon: <Scale className="h-6 w-6" />, 
      title: "قانوني", 
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      points: [
        "التزامات وفق اتفاقية باريس وخطر الغرامات التنظيمية على الانبعاثات."
      ]
    }
  ];

  return (
    <Slide title="تحليل PESTEL – عوامل البيئة الخارجية المؤثرة" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className={`p-4 border ${category.color}`}>
            <div className="flex items-center mb-3">
              <div className="ml-3 p-2 rounded-full bg-white">
                {category.icon}
              </div>
              <h3 className="font-bold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.points.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-current mt-2 ml-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-sabic-light rounded-lg">
        <h3 className="font-bold mb-2 text-sabic-primary">تأثير تحليل PESTEL على استراتيجية سابك:</h3>
        <p className="text-gray-700">
          يشير التحليل إلى تحول كبير في البيئة الخارجية نحو الاستدامة والتكنولوجيا النظيفة. يجب على سابك الاستجابة من خلال التحول في عملياتها ومنتجاتها للتكيف مع هذه المتغيرات وتجنب المخاطر المالية والتنظيمية.
        </p>
      </div>
    </Slide>
  );
};

export default Slide5;
