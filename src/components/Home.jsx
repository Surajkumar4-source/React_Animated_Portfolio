// import React, { useEffect, useRef } from "react";
// import pdf from "../pdf/suraj__resume2.pdf";
// import hero from "./data/hero.json";
// import Typed from "typed.js";

// const Home = () => {
//   const typedRef = useRef(null);
//   useEffect(() => {
//     const options = {
//       strings: [
//         "Welcome to my profile...",
//         "My Name is Suraj...",
//         "I'm a System Admin...",
//         "Linux Admin...",
//         "AI/ML Enthusiast...",
//         "Frontend Developer...",
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//     };

//     const typed = new Typed(typedRef.current, options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div className="container home" id="home">
//         <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
//           <h1 ref={typedRef}></h1>

//           <a
//             href={pdf}
//             download="Resume.pdf"
//             className="btn btn-outline-warning my-3"
//           >
//             Download Resume
//           </a>
//         </div>
//         <div className="right">
//           <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
//             <img src={`/assets/${hero.imgSrc}`} alt="hero" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;





import React, { useEffect, useRef } from "react";
import pdf from "../pdf/My Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile...",
        "My Name is Suraj...",
        "I'm a System Admin...",
        "Linux Admin...",
        "AI/ML Enthusiast...",
        "Frontend Developer...",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      shuffle: false, // Random typing for hacker effect
      smartBackspace: false,
      loop: true,
      showCursor: true,
      cursorChar: "█", // Classic terminal cursor
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef} className="hacker-text"></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;










