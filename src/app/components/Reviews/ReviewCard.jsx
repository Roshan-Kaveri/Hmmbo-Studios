import React from "react";

const ReviewCard = ({ text, name, avatarUrl, reviewLink, reviewImageUrl }) => {
  return (
    <div className="w-80 p-6 h-[22rem] border border-white bg-[#1A1919] flex flex-col justify-between text-white space-y-6">
      {/* Review Text */}
      <p className="text-base leading-relaxed">{text}</p>

      {/* Footer: Avatar & Name + Review Image Link */}
      <div className="flex items-center justify-between">
        {/* Avatar and Name */}
        <div className="flex items-center space-x-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white" />
          )}
          <span className="font-bold text-primary text-lg">{name}</span>
        </div>

        {/* Clickable review image (e.g., site icon or button) */}
        {reviewLink && reviewImageUrl ? (
          <a href={reviewLink} target="_blank" rel="noopener noreferrer">
            <img
              src={reviewImageUrl}
              alt="Review"
              className="w-8 h-6 object-contain rounded-sm hover:opacity-80 transition"
            />
          </a>
        ) : (
          <div className="w-8 h-6 bg-gray-300 rounded-sm" />
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
