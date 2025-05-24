import React from "react";

const PromoReviewCard = () => {
  return (
    <div className="w-80 h-[22rem] p-6 border border-white bg-[#1A1919] text-primary flex flex-col items-center justify-center text-center">
      <div className="text-white mb-4">

          <div className="text-white mb-4">
        <div className="text-3xl font-bold">1,000+</div>
        <div className="text-lg font-semibold text-green-400">Sales</div>
      </div>
      
        <div className="text-4xl font-bold">20,000+</div>
        <div className="text-lg font-semibold text-blue-400">Downloads</div>
      </div>

    

      <div className="mt-2 text-sm text-zinc-300 max-w-[14rem]">
        Trusted by developers and admins worldwide.
      </div>

      <div className="mt-2 text-xs text-zinc-500 max-w-[12rem]">
        Based on real user reviews and feedback.
      </div>
    </div>
  );
};

export default PromoReviewCard;
