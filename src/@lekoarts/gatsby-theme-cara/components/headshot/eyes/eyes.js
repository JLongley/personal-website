/** @jsx jsx */
import { jsx } from "theme-ui";

import Jim from "./Jim.jpg";

// .eye {
//   width: 50px;
//   height: 75px;
//   background: #fff;
//   border-radius: 50%;
//   position: absolute;
//   top: 70px;
// }

const Eye = () => (
  <div
    sx={{
      position: "absolute",
      width: 50,
      height: 50,
      backgroundColor: "#fff",
      borderRadius: "50%",
    }}
  >
    <Pupil />
  </div>
);

const Pupil = () => (
  <div
    sx={{
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "#000",
      position: "absolute",
      left: "calc(50% - 5px)",
      bottom: "calc(50% + 5px)",
    }}
  />
);

const Eyes = () => (
  <div>
    <Eye />
    <Eye />
  </div>
);

export default Eyes;

// const pupils = Array.from(document.querySelectorAll('.pupil')),
//       centerX = window.innerWidth / 2,
//       centerY = window.innerHeight / 2;

// document.addEventListener('mousemove', (e) => {
//   const lookAtX = (150 / centerX) * (e.clientX - centerX),
//     lookAtY = (150 / centerY) * (e.clientY - centerY);

//   pupils.forEach(p => p.style.transform = `translate(${lookAtX}%, ${lookAtY}%)`);
// })
