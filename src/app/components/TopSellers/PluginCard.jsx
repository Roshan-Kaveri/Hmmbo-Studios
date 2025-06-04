import React from "react";

const PluginCard = ({ title, description, price, originalPrice, image }) => {
  return (
    <div className="w-full max-w-xs bg-black text-white rounded-lg shadow-md overflow-hidden border border-zinc-800">
      {/* Image */}
      <div className="h-80 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-sm text-gray-300 mt-1 line-clamp-3">{description}</p>

        {/* Pricing + Button */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            {originalPrice && (
              <p className="text-xs text-gray-400 line-through">${originalPrice}</p>
            )}
            <p className="text-base font-bold text-white">${price}</p>
          </div>
          <button className="bg-primary text-black px-3 py-2 rounded text-xs font-medium hover:bg-gray-200 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default PluginCard;
