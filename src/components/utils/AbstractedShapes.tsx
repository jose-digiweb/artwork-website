export const AbstractedShapes = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="smallGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        <circle
          className="animate-float"
          cx="5%"
          cy="10%"
          r="50"
          fill="rgba(255,182,193,0.3)"
        />
        <circle
          className="animate-float delay-200"
          cx="95%"
          cy="50%"
          r="100"
          fill="rgba(216,180,254,0.3)"
        />
        <circle
          className="animate-float delay-500"
          cx="15%"
          cy="90%"
          r="70"
          fill="rgba(165,180,252,0.3)"
        />
        <path d="M0,0 Q50,100 100,0 V100 H0 Z" fill="rgba(255,255,255,0.05)" />
        <path d="M0,100 Q50,0 100,100 V0 H0 Z" fill="rgba(0,0,0,0.03)" />
      </svg>
    </div>
  );
};
