
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Navigation from './Navigation';
import TitleSlide from './slides/TitleSlide';
import TeamSlide from './slides/TeamSlide';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import ThankYouSlide from './slides/ThankYouSlide';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;
  
  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };
  
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };
  
  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToPrevSlide();
      } else if (e.key === 'ArrowLeft') {
        goToNextSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);
  
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => goToPrevSlide(),
    onSwipedLeft: () => goToNextSlide(),
    trackMouse: true
  });
  
  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <TitleSlide />;
      case 1:
        return <TeamSlide slideNumber={2} totalSlides={totalSlides} />;
      case 2:
        return <Slide1 slideNumber={3} totalSlides={totalSlides} />;
      case 3:
        return <Slide2 slideNumber={4} totalSlides={totalSlides} />;
      case 4:
        return <Slide3 slideNumber={5} totalSlides={totalSlides} />;
      case 5:
        return <Slide4 slideNumber={6} totalSlides={totalSlides} />;
      case 6:
        return <Slide5 slideNumber={7} totalSlides={totalSlides} />;
      case 7:
        return <Slide6 slideNumber={8} totalSlides={totalSlides} />;
      case 8:
        return <Slide7 slideNumber={9} totalSlides={totalSlides} />;
      case 9:
        return <Slide8 slideNumber={10} totalSlides={totalSlides} />;
      case 10:
        return <Slide9 slideNumber={11} totalSlides={totalSlides} />;
      case 11:
        return <Slide10 slideNumber={12} totalSlides={totalSlides} />;
      case 12:
        return <Slide11 slideNumber={13} totalSlides={totalSlides} />;
      case 13:
        return <Slide12 slideNumber={14} totalSlides={totalSlides} />;
      case 14:
        return <ThankYouSlide slideNumber={15} totalSlides={totalSlides} />;
      default:
        return <TitleSlide />;
    }
  };
  
  return (
    <div {...swipeHandlers} className="min-h-screen">
      {renderSlide()}
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Presentation;
