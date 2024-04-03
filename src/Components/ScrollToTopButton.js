import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background-color: #088F8F;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2000;
        }
        
        .scroll-to-top-btn.show {
          opacity: 1;
        }
    `}
      </style>
      <div
        className={isVisible ? "scroll-to-top-btn show" : "scroll-to-top-btn"}
        onClick={scrollToTop}
      >
        <i className="fa-regular fa-angle-up"></i>
      </div>
    </>
  );
};

export default ScrollToTopButton;
