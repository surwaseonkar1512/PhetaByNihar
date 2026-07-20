import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const hasMaxWidth = className.includes('max-w-');
  const hasMargin = className.includes('mx-') || className.includes('ml-') || className.includes('mr-');

  const defaultClasses = [
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    hasMaxWidth ? '' : 'max-w-[600px]',
    hasMargin ? '' : 'mx-auto',
    'opacity-90',
    'py-2'
  ].filter(Boolean).join(' ');

  return (
    <div className={`${defaultClasses} ${className}`}>
      <div className="relative w-full h-8 overflow-hidden flex items-center justify-center">
        <img
          src="/divider.png"
          alt="Divider"
          className="absolute w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

