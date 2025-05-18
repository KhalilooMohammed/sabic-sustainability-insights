
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
    <div className={cn("slide-container rtl animate-fade-in", className)}>
      <div className="slide">
        {!isTitle && (
          <div className="slide-header">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        )}
        <div className={cn("slide-content", isTitle ? "flex items-center justify-center" : "")}>
          {children}
        </div>
        {!isTitle && (
          <div className="slide-footer">
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
