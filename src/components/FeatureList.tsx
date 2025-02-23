import React from 'react';
import Feature from './Feature';
import { Feature as FeatureType } from '../types';

interface FeatureListProps {
  features: FeatureType[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <main className="container mx-auto p-4">
    <div id="features">
      {features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
    </div>
  </main>
);

export default FeatureList;
