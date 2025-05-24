"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PromoReviewCard from "./PromoReviewCard";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    text: "Changed my entire server experience!",
    name: "DevMaster",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
  {
    text: "The support was top-tier, highly recommended.",
    name: "ServerAdminX",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
   {
    text: "Changed my entire server experience!",
    name: "DevMaster",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
  {
    text: "The support was top-tier, highly recommended.",
    name: "ServerAdminX",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
   {
    text: "Changed my entire server experience!",
    name: "DevMaster",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
  {
    text: "The support was top-tier, highly recommended.",
    name: "ServerAdminX",
    avatarUrl: "https://via.placeholder.com/40",
    reviewLink: "#",
    reviewImageUrl: "https://via.placeholder.com/32x24",
  },
  // Add more if needed...
];


export default function ReviewCarousel() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
  
    slides: {
      origin: "center",
      perView: 4,
      spacing: 20,
    },
   
  });

  return (
    <div className="w-full flex flex-col">
        <div className="m-4 mt-10 text-center">
        <h2
          className={`font-bold text-4xl md:text-6xl text-secondary-gradient`}
        >
          Real Feedback <br/>From Real Users
        </h2>
      </div>
    
    <div className="w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider px-4">
        {/* PromoReviewCard goes first */}
        <div className="keen-slider__slide !w-auto min-w-[300px] flex justify-center">
          <PromoReviewCard />
        </div>
        {/* Then the rest of the review cards */}
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="keen-slider__slide !w-auto min-w-[300px] flex justify-center"
          >
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
