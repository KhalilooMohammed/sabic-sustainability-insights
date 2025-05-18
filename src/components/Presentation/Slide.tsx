
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
          <div className="slide-header py-4">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        )}
        <div className={cn(
          "slide-content flex-grow overflow-auto", 
          isTitle ? "flex items-center justify-center" : "px-4"
        )}>
          {children}
        </div>
        {!isTitle && (
          <div className="slide-footer py-2 flex justify-between items-center">
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
