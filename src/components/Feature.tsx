import React, { useState } from 'react';
import { Feature as FeatureType } from '../types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpandCollapse from './common/ExpandCollapse';

interface FeatureProps {
  feature: FeatureType;
  isFullscreen?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ feature, isFullscreen }) => {
  const [isOldCodeExpanded, setIsOldCodeExpanded] = useState(false);
  const [isNewCodeExpanded, setIsNewCodeExpanded] = useState(false);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isBenefitsExpanded, setIsBenefitsExpanded] = useState(false);

  return (
    <section
      className={`${
        !isFullscreen
          ? 'bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6 overflow-hidden'
          : ''
      }`}
    >
      <div className='p-6'>
        {/* Header */}
        <div
          className={`${
            isFullscreen ? 'sticky top-0 z-50 bg-white/95 pt-3 pb-3' : ''
          }`}
        >
          <div className='flex items-center mb-4'>
            <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
              {feature.title}
            </h3>
            <div className='ml-auto'>
              <span className='px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full'>
                New Feature
              </span>
            </div>
          </div>
        </div>

        <div className={`flex flex-col 'md:flex-row'`}>
          {/* Description and Benefits */}
          <div>
            <p className='text-gray-600 leading-relaxed mb-6'>
              {feature.description}
            </p>
            {feature.oldCode && (
              <div className='mt-6'>
                <h4
                  className='text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3 cursor-pointer'
                  onClick={() => setIsOldCodeExpanded(!isOldCodeExpanded)}
                >
                  {<ExpandCollapse isExpanded={isOldCodeExpanded} />}
                  Old Code
                </h4>
                {isOldCodeExpanded && (
                  <SyntaxHighlighter language='typescript' style={materialDark}>
                    {feature.oldCode}
                  </SyntaxHighlighter>
                )}
              </div>
            )}
            {feature.newCode && (
              <div className='mt-6'>
                <h4
                  className='text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3 cursor-pointer'
                  onClick={() => setIsNewCodeExpanded(!isNewCodeExpanded)}
                >
                  {<ExpandCollapse isExpanded={isNewCodeExpanded} />}
                  New Code
                </h4>
                {isNewCodeExpanded && (
                  <SyntaxHighlighter language='typescript' style={materialDark}>
                    {feature.newCode}
                  </SyntaxHighlighter>
                )}
              </div>
            )}
            {feature.features && (
              <div className='mt-6'>
                <h4
                  className='text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3 cursor-pointer'
                  onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
                >
                  {<ExpandCollapse isExpanded={isFeaturesExpanded} />}
                  <span className='text-green-500'>✓</span> Key Features
                </h4>
                {isFeaturesExpanded && (
                  <ul className='grid gap-2'>
                    {feature.features.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors'
                      >
                        <span className='text-blue-500 mt-1'>•</span>
                        <span>
                          {feature.title ? (
                            <strong>{feature.title}: </strong>
                          ) : null}
                          {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {feature.benefits && (
              <div className='mt-6'>
                <h4
                  className='text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3 cursor-pointer'
                  onClick={() => setIsBenefitsExpanded(!isBenefitsExpanded)}
                >
                  {<ExpandCollapse isExpanded={isBenefitsExpanded} />}
                  <span className='text-green-500'>✓</span> Key Benefits
                </h4>
                {isBenefitsExpanded && (
                  <ul className='grid gap-2'>
                    {feature.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors'
                      >
                        <span className='text-blue-500 mt-1'>•</span>
                        <span>
                          {benefit.title ? (
                            <strong>{benefit.title}: </strong>
                          ) : null}
                          {benefit.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
