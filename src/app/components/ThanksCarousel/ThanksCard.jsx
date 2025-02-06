const TCard = ({ title, description, imageUrl, url, borderColor = "#FFFFFF" }) => {
    return (
      <div className="flex flex-col items-center">
        {/* Circular Image with Border */}
        <div
          className={`w-32 h-32  rounded-full flex items-center justify-center border-4 border-primary`}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
  
        {/* Title */}
        <a className="" href={url} target="_blank">
        <h2 className="text-primary font-bold text-lg mt-4">{title}</h2>
        </a>
  
        {/* Description */}
        <p className="text-gray-400 text-center text-sm mt-2 max-w-xs">
          {description}
        </p>
      </div>
    );
  };
  
  export default TCard;