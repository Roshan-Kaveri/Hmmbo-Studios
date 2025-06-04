import React from "react";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  price = "FREE",
  oldPrice,
  onAddToCart,
  isOnSale,
}) {
  return (
    <div className="max-w-sm rounded-xl shadow-md overflow-hidden  text-white">
      {/* Image Section */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full object-cover aspect-square"
        />
        {isOnSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Sale
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold  text-white">{title}</h3>
        <div className="flex">
          
        </div>
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div className="text-base">
            {oldPrice && (
              <span className="line-through text-gray-500 mr-2">
                {oldPrice}
              </span>
            )}
            <span className="text-lg font-bold text-white">{price}</span>
          </div>
          <button
            onClick={onAddToCart}
            className="bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
