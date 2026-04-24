import React from 'react';

export function Card({ children, imageSrc, imageAlt, className = '' }: { children: React.ReactNode; imageSrc: string; imageAlt: string; className?: string }) {
  return (
    <div className={`group relative bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(27,28,26,0.03)] hover:shadow-[0_30px_60px_rgba(27,28,26,0.06)] transition-shadow duration-500 ${className}`}>
      <div className="h-80 w-full overflow-hidden">
        <img alt={imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={imageSrc} />
      </div>
      <div className="p-10 relative bg-surface-container-lowest -mt-10 mx-6 mb-6 rounded-lg shadow-[0_10px_30px_rgba(27,28,26,0.04)]">
        {children}
      </div>
    </div>
  );
}
