/** @jsx jsx */
import { jsx } from "theme-ui";
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils";

import { keyframes } from "@emotion/react";

const Face = ({ transform, color, stroke, children }) => (
  <figure
    sx={{
      boxSizing: "border-box",
      display: "block",
      position: "absolute",
      margin: 0,
      padding: 0,
      width: "100%",
      height: "100%",
      border: `${stroke}px solid`,
      borderColor: color,
      backfaceVisibility: "hidden",
      transform,
    }}
  >
    {children}
  </figure>
);

const Cube = ({
  width,
  left,
  top,
  color,
  stroke = width / 16,
  children,
  hiddenMobile = false,
}: CubeProps) => {
  const spin = keyframes`
      0% {
        transform: translateZ(-${width /
          2}px) rotateY(360deg) rotateZ(0deg) rotateX(45deg);
      }
      50% {
        transform: translateZ(-${width /
          2}px) rotateY(180deg) rotateZ(180deg) rotateX(45deg);
      }
      100% {
        transform: translateZ(-${width /
          2}px) rotateY(0deg) rotateZ(360deg) rotateX(45deg);
      }
    `;

  const animationDuration = width / 4;

  return (
    <div
      sx={{
        position: `absolute`,
        left,
        top,
        width,
        height: width,
        display: hiddenMobile ? hidden : `block`,
      }}
    >
      <div
        sx={{
          width: `${width}px`,
          height: `${width}px`,
          position: "relative",
          perspective: `${width * 5}px`,
        }}
      >
        <div
          sx={{
            animation: `${spin} ${animationDuration}s infinite linear`,
            animationDelay: `-${width * 17}ms`,
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            transform: `translateZ(-${width /
              2}px) rotateZ(45deg) rotateX(45deg)`,
          }}
        >
          <Face
            front
            transform={`rotateY(0deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          >
            {children}
          </Face>
          <Face
            back
            transform={`rotateX(180deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          >
            {children}
          </Face>
          <Face
            left
            transform={`rotateY(-90deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          />
          <Face
            right
            transform={`rotateY(90deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          />
          <Face
            top
            transform={`rotateX(90deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          />
          <Face
            bottom
            transform={`rotateX(-90deg) translateZ(${width / 2}px)`}
            color={color}
            stroke={stroke}
          />
        </div>
      </div>
    </div>
  );
};

type CubeProps = {
  width: number;
  stroke: number;
  left: string;
  top: string;
  color: string;
  hiddenMobile?: boolean;
};

export default Cube;
