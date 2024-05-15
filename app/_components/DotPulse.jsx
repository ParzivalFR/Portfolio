const DotPulse = ({ size, color }) => {
  const sizeClass = `w-${size} h-${size}`;
  const colorClass = `bg-${color}`;

  return (
    <div className="flex justify-center items-center z-50 absolute -top-1 -right-1">
      <div className="relative inline-flex">
        <span className={`${sizeClass} ${colorClass} rounded-full`}></span>
        <span
          className={`${sizeClass} ${colorClass} rounded-full absolute top-0 left-0 animate-ping`}
        ></span>
        <span
          className={`${sizeClass} ${colorClass} rounded-full absolute top-0 left-0 animate-pulse`}
        ></span>
      </div>
    </div>
  );
};

export default DotPulse;
