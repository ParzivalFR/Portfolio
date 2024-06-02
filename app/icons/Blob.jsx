"use client";

import Swal from "sweetalert2";

const Blob = ({ width, className }) => {
  const handleClick = () => {
    Swal.fire({
      title: "👻 Boooooooooh !",
      text: "Tu viens de trouver un easter egg ! 🥚🐣🐰🌷🍫🎉🎊🎈🎁🎀🎃👻",
      icon: "success",
      confirmButtonText: "👍🏼 Cool !",
      animation: true,
      customClass: {
        popup: "animated tada",
      },
    });
  };

  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onClick={handleClick}
      >
        {/* Votre chemin de blob ici */}
        <path
          fillOpacity="1"
          fill="#ffff"
          d="M49.3,-67.8C64.1,-57.1,76.5,-43,79.1,-27.5C81.7,-11.9,74.6,5,67,19.7C59.4,34.4,51.2,46.9,40,56.6C28.7,66.3,14.4,73.4,3.5,68.6C-7.4,63.8,-14.9,47.3,-27.4,38C-40,28.7,-57.6,26.6,-67.2,17.1C-76.7,7.7,-78.2,-9.1,-73,-23.3C-67.8,-37.5,-56,-49.2,-42.7,-60.4C-29.5,-71.5,-14.7,-82.3,1.3,-84C17.2,-85.7,34.5,-78.5,49.3,-67.8Z"
          transform="translate(100 100)"
          id="blob-path"
        />

        {/* Créez le masque */}
        <mask id="blob-mask">
          <use xlinkHref="#blob-path" fill="white" />
        </mask>

        {/* Ajoutez votre image avec le masque */}
        <image
          xlinkHref="/logo2.jpg"
          x="0"
          y="0"
          width="200"
          height="200"
          mask="url(#blob-mask)"
        />
      </svg>
    </>
  );
};

export default Blob;
