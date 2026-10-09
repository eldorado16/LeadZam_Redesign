import React from 'react';
import { leadSourcesData } from './data';
import { LeadSourceCard } from './LeadSourceCard';

export const LeadSources: React.FC = () => {
  return (
    <section className="w-full bg-white px-[52px] py-[79px]">
      <div className="flex min-w-max items-center gap-14">
        <div className="w-[410px] flex-shrink-0 pt-[23px]">
          <span className="mb-6 block text-[20px] font-semibold leading-none text-[#4b5cff]">
            Lead Sources
          </span>
          <h2 className="mb-6 text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-black">
            Connect the channels you<br /> already use
          </h2>
          <p className="max-w-[410px] text-[20px] leading-[1.35] tracking-[-0.01em] text-[#626575]">
            Capture leads from your ad platform, forms, websites and more - all in one pipeline.
          </p>
        </div>

        <div className="mt-[46px] flex items-center gap-8">
          {leadSourcesData.map((source) => (
            <LeadSourceCard key={source.id} source={source} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadSources;
