import { useState, useEffect, useCallback } from 'react';
import './App.css'
import { ThemeContext } from './ThemeContext'
import { REACT19_FEATURES } from './features-list'
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import FullscreenFeature from './components/FullscreenFeature';
import Footer from './components/Footer';

function App() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prevSlide = useCallback(() => {
    if (currentFeatureIndex === 0) {
      setCurrentFeatureIndex(REACT19_FEATURES.length - 1);
      return;
    }

    setCurrentFeatureIndex(currentFeatureIndex - 1);
  }, [setCurrentFeatureIndex, currentFeatureIndex]);

  const nextSlide = useCallback(() => {
    if (currentFeatureIndex === REACT19_FEATURES.length - 1) {
      setCurrentFeatureIndex(0);
      return;
    }
    setCurrentFeatureIndex(currentFeatureIndex + 1);
  }, [setCurrentFeatureIndex, currentFeatureIndex]);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'F') {
        setIsFullscreen(!isFullscreen);
      } else if (isFullscreen) {
        if (event.key === 'ArrowRight') {
          nextSlide();
          // setCurrentFeatureIndex((currentFeatureIndex + 1) % REACT19_FEATURES.length);
        } else if (event.key === 'ArrowLeft') {
          prevSlide()
          // setCurrentFeatureIndex((currentFeatureIndex - 1 + REACT19_FEATURES.length) % REACT19_FEATURES.length);
        } else if (event.key === 'Escape') {
          setIsFullscreen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeydown, { signal });

    return () => {
      controller.abort();
    };
  }, [nextSlide,
    prevSlide, isFullscreen, currentFeatureIndex, setIsFullscreen, setCurrentFeatureIndex]);

  return (
    <>
      <ThemeContext value="dark">
        <div className="bg-gray-100 text-gray-900">
          <Header />
          <FeatureList features={REACT19_FEATURES} />
          <Footer />
          {isFullscreen && (
            <FullscreenFeature
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              feature={REACT19_FEATURES[currentFeatureIndex]}
              currentFeatureIndex={currentFeatureIndex}
            />
          )}
        </div>
      </ThemeContext>
    </>
  )
}

export default App
