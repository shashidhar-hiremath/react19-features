import React from 'react';
import Feature from './Feature';
import { Feature as FeatureType } from '../types';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/16/solid';

interface FeatureListProps {
  features: FeatureType[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <main
      className={`flex flex-row p-4 transition-all duration-300 ${
        isExpanded ? '' : 'gap-4'
      }`}
      style={{
        height: 'calc(100vh - 124px)',
      }}
    >
      <div
        id='features'
        className={`overflow-y-auto transition-all duration-300 ${
          isExpanded ? 'w-0 opacity-0' : 'w-1/2 md:w-1/2 opacity-100'
        }`}
      >
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>

      {/* Code Preview */}
      <div
        className={`transition-all duration-300 ${
          isExpanded ? 'w-full' : 'md:w-1/2'
        }`}
      >
        <div
          className='relative'
          style={{
            height: '100%',
          }}
        >
          <iframe
            src='https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo'
            className='w-full h-full max-h-full rounded-lg border border-gray-200 bg-gray-50'
            title={`Code example`}
          />
          <div className='absolute top-2 right-2 flex items-center gap-2'>
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className='bg-white/90 hover:bg-white px-3 py-1 rounded text-sm shadow-sm border border-gray-20 transition-colors cursor-pointer'
            >
              {isExpanded ? (
                <ArrowRightCircleIcon className='w-5 h-5' />
              ) : (
                <ArrowLeftCircleIcon className='w-5 h-5' />
              )}
            </button>
            <a
              target='_blank'
              href='https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FContextAsProviderDemo.tsx'
              className='bg-white/90 hover:bg-white px-3 py-1 rounded text-sm shadow-sm border border-gray-200'
            >
              View Full Code
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeatureList;
