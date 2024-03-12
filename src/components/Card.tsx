import React from 'react';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {/* You can add additional content here */}
    </div>
  );
};

export default Card;
