/** @jsx jsx */
import { jsx } from "theme-ui";

import { useMousePosition } from "../../../hooks/useMousePosition";
import { useCallback, useState } from "react";

const Eye = ({ left, right }) => {
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
        position: "absolute",
        top: "35%",
        left,
        right,
        width: "10%",
        height: "10%",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transform: "rotate(" + rot + "deg)",
      }}
    >
      <Pupil />
    </div>
  );
};

const Pupil = () => (
  <div
    sx={{
      width: "40%",
      height: "40%",
      borderRadius: "50%",
      backgroundColor: "#000",
      position: "absolute",
      top: "2px",
      left: "30%",
    }}
  />
);

const Eyes = () => (
  <div
    sx={{
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
    }}
  >
    <Eye left="39%" />
    <Eye right="34%" />
  </div>
);

export default Eyes;
