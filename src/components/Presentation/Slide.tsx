
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  title: string;
  children: ReactNode;
  className?: string;
  slideNumber?: number;
  totalSlides?: number;
  isTitle?: boolean;
}

const Slide = ({
  title,
  children,
  className,
  slideNumber,
  totalSlides,
  isTitle = false,
}: SlideProps) => {
  return (
    <div className={cn("slide-container rtl animate-fade-in h-screen flex flex-col", className)}>
      <div className="slide h-full flex flex-col">
        {!isTitle && (
          <div className="slide-header py-2">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        )}
        <div className={cn(
          "slide-content flex-grow flex flex-col", 
          isTitle ? "items-center justify-center" : "px-4 py-2"
        )}>
          {children}
        </div>
        {!isTitle && (
          <div className="slide-footer py-1 flex justify-between items-center">
            <div>شركة سابك - تحليل استراتيجي</div>
            {slideNumber && totalSlides && (
              <div>{slideNumber} / {totalSlides}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
