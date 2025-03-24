import React from 'react';

type PriceProps = {
  value: number;
  className?: string;
};

const Price: React.FC<PriceProps> = ({ value, className }) => {
  return <span className={className}>$ {value.toFixed(2)}</span>;
};

export default Price;