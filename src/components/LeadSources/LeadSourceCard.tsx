import React, { useState } from 'react';
import { LeadSource } from './data';
import { ArrowCircleIcon } from './icons';

interface Props {
  source: LeadSource;
}

export const LeadSourceCard: React.FC<Props> = ({ source }) => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <article 
      onClick={() => setIsConnected(!isConnected)}
      className={`group flex h-[220px] w-[228px] flex-shrink-0 flex-col justify-between rounded-[8px] border bg-white p-[14px] cursor-pointer select-none transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(20,25,45,0.12)] ${
        isConnected 
          ? 'border-[#4b5cff] shadow-[0_4px_12px_rgba(75,92,255,0.15)] ring-1 ring-[#4b5cff]' 
          : 'border-[#e3e5ee] shadow-[0_4px_8px_rgba(20,25,45,0.08)] hover:border-[#ccd0e8]'
      }`}
    >
      <div>
        <div className="flex h-[81px] items-start justify-between">
          <div className="flex flex-shrink-0 items-center pt-[13px]">
            {source.icon}
          </div>
          {source.isPopular && (
            <span className="inline-flex items-center rounded-full bg-[#f0f1ff] px-[10px] py-[4px] text-[10px] font-medium leading-none text-[#4f5cff]">
              Popular
            </span>
          )}
        </div>

        <h3 className="mb-[10px] text-[17px] font-bold leading-none tracking-[-0.02em] text-black">
          {source.title}
        </h3>
        <p className="text-[16px] leading-[1.25] tracking-[-0.01em] text-[#626575]">
          {source.description}
        </p>
      </div>

      <div className="flex justify-end items-center">
        <button 
          type="button" 
          aria-label={`Connect ${source.title}`} 
          className={`flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1.5px] border-[#4b5cff] transition-all duration-200 active:scale-90 ${
            isConnected 
              ? 'bg-[#4b5cff] text-white scale-105 shadow-sm' 
              : 'text-[#4b5cff] group-hover:bg-[#4b5cff] group-hover:text-white group-hover:scale-105'
          }`}
        >
          {isConnected ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <ArrowCircleIcon />
          )}
        </button>
      </div>
    </article>
  );
};
