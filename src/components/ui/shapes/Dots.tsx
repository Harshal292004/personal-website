const Dots = ({ className = "", color = "#000000" }) => {
    return (
      <div className={`absolute ${className}`}>
        <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill={color} />
          <circle cx="36" cy="8" r="8" fill={color} />
          <circle cx="64" cy="8" r="8" fill={color} />
          <circle cx="92" cy="8" r="8" fill={color} />
        </svg>
      </div>
    );
  };


export default Dots