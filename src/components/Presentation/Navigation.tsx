
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (slideIndex: number) => void;
}

const Navigation = ({
  currentSlide,
  totalSlides,
  goToNextSlide,
  goToPrevSlide,
  goToSlide,
}: NavigationProps) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-4 z-50">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={goToPrevSlide}
        disabled={currentSlide === 0}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
      
      {/* Slide indicators */}
      <div className="flex gap-1.5 items-center bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-sabic-primary w-4" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={goToNextSlide}
        disabled={currentSlide === totalSlides - 1}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Navigation;
