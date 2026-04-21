import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { logosArray } from "../../data";

const BannersMarquee = () => {
  const [gradientWidth, setGradientWidth] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      setGradientWidth(window.innerWidth < 768 ? 40 : 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div dir="ltr" className="py-4 sm:py-6">
      <Marquee
        speed={45}
        pauseOnHover={false}
        direction="left"
        gradient={true}
        gradientColor="#050505"
        gradientWidth={gradientWidth}
      >
        {logosArray.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Logo ${index + 1}`}
            className="block object-contain w-24 sm:w-32 md:w-40 lg:w-52 mx-4 sm:mx-8"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default BannersMarquee;
