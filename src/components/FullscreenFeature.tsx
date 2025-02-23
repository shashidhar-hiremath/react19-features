import React from 'react';
import { Feature as FeatureType } from '../types';
import Feature from './Feature';

interface FullscreenFeatureProps {
  feature: FeatureType;
  currentFeatureIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const FullscreenFeature: React.FC<FullscreenFeatureProps> = ({ feature, prevSlide,
  nextSlide }) => {
  const handlePrev = () => {
    prevSlide();
  };

  const handleNext = () => {
    nextSlide();
  };

  return (
    <div className="fullscreen active flex items-center justify-center relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 transform -translate-y-1/2 top-1/2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Prev
      </button>
      <div className="fullscreen-content mx-4 w-4/5">
        <Feature feature={feature} isFullscreen={true} />
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default FullscreenFeature;
