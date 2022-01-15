/** @jsx jsx */
import { jsx } from "theme-ui";
import { useMousePosition } from "../../../hooks/useMousePosition";
import { useCallback, useState } from "react";

import PupilImg from "../Jim_pupil.png";

const Eye = ({ left, right, top, width }) => {
  const page = useMousePosition();
  const [dimensions, setDimensions] = useState(null);

  const callBackRef = useCallback((domNode) => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  let rad, rot;

  if (!!page && !!dimensions) {
    rad = Math.atan2(page.x - dimensions.x, page.y - dimensions.y);
    rot = rad * (180 / Math.PI) * -1 + 180;
  }

  return (
    <div
      ref={callBackRef}
      sx={{
        boxSizing: "border-box",
        position: "absolute",
        top,
        left,
        right,
        width,
        height: width,
        borderRadius: "50%",
        transform: "rotate(" + rot + "deg)",
        backgroundColor: "#DDD",
      }}
    >
      <Pupil />
    </div>
  );
};

const Pupil = () => (
  <img
    alt=""
    sx={{
      boxSizing: "border-box",
      width: "55%",
      height: "55%",
      borderRadius: "50%",
      backgroundColor: "#000",
      position: "absolute",
      top: "0px",
      left: "30%",
    }}
    src={PupilImg}
  />
);

const Eyes = () => (
  <div
    sx={{
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      transform: "scale(1, .58)",
    }}
  >
    <Eye left="42%" top="34%" width="5.5%" />
    <Eye right="38%" top="34.5%" width="5.5%" />
  </div>
);

export default Eyes;
