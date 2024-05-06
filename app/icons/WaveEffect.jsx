const WaveEffect = ({ width, height, className }) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width={width}
      height={height}
      className={className}
      version="1.1"
    >
      <path
        d="M0 505L21.5 496.3C43 487.7 86 470.3 128.8 460.3C171.7 450.3 214.3 447.7 257.2 438C300 428.3 343 411.7 385.8 420.7C428.7 429.7 471.3 464.3 514.2 468.3C557 472.3 600 445.7 642.8 429.5C685.7 413.3 728.3 407.7 771.2 418.2C814 428.7 857 455.3 878.5 468.7L900 482L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  );
};

export default WaveEffect;
