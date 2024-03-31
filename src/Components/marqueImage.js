import React from "react";

function MarqueImage() {
  const row1 = [
    "Images/Skills-Logo/1.jpg",
    "Images/Skills-Logo/2.jpg",
    "Images/Skills-Logo/3.jpg",
    "Images/Skills-Logo/4.jpg",
    "Images/Skills-Logo/5.jpg",
    "Images/Skills-Logo/6.jpg",
  ];

  const row2 = [
    "Images/Skills-Logo/7.jpg",
    "Images/Skills-Logo/8.jpg",
    "Images/Skills-Logo/9.jpg",
    "Images/Skills-Logo/10.jpg",
    "Images/Skills-Logo/11.jpg",
    "Images/Skills-Logo/12.jpg",
  ];

  const common = `
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 80%;
    animation: scrollX 30s linear infinite;
  `;

  return (
    <>
      <style>
        {`
      .wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0));
      }
      
      .marquee {
        display: flex;
        width: 1200px;
        user-select: none;
      }

      .marquee-group {
        ${common} 
      }
      .marquee-group2 {
        ${common} 
        animation-direction: reverse;
        animation-delay: -3s;
      }
      
      .image-group {
        display: grid;
        place-items: center;
        width: clamp(10rem, 1rem + 40vmin, 30rem);
        padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
      }
      
      .image {
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        aspect-ratio: 16/9;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
      @keyframes scrollX {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
      `}
      </style>
      <div className="wrapper mt-5">
        <div className="marquee">
          <div className="marquee-group">
            {row1.map((e, index) => (
              <div className="image-group" key={index}>
                <img src={e} alt={`Image ${index}`} className="image" />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {row1.map((e, index) => (
              <div className="image-group" key={index}>
                <img src={e} alt={`Image ${index}`} className="image" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-group2">
            {row2.map((e, index) => (
              <div className="image-group" key={index}>
                <img src={e} alt={`Image ${index}`} className="image" />
              </div>
            ))}
          </div>
          <div className="marquee-group2">
            {row2.map((e, index) => (
              <div className="image-group" key={index}>
                <img src={e} alt={`Image ${index}`} className="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarqueImage;
