import Slide from "../Slide";
import { Card } from "@/components/ui/card";
const ThankYouSlide = ({
  slideNumber,
  totalSlides
}: {
  slideNumber: number;
  totalSlides: number;
}) => {
  return <Slide title="شكرًا لحسن استماعكم" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-6 bg-sabic-light rounded-full flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2479 3.61096 17.4225C2.43727 15.5971 1.87979 13.4312 2.02168 11.2499C2.16356 9.06865 2.99721 6.9805 4.39828 5.3003C5.79935 3.62011 7.69279 2.42199 9.79619 1.89365C11.8996 1.36531 14.1003 1.53426 16.07 2.3699" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 4L12 14.01L9 11.01" stroke="#006341" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <Card className="p-6 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-sabic-primary">في ضوء التحليل</h2>
          <p className="text-lg mb-6">
            نؤمن أن سابك تمتلك الإمكانات لتكون رائدة عالميًا في الاقتصاد الأخضر، شرط تنفيذ استراتيجيات التحول بكفاءة وفعالية.
          </p>
          
          
        </Card>
      </div>
    </Slide>;
};
export default ThankYouSlide;