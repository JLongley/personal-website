/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Cube from "../../../components/cube";
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer";

import {
  UpDown,
  UpDownWide,
  waveAnimation,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";

// @ts-ignore
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact";

const Contact = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Cube
          hiddenMobile
          width={32}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Cube width={32} color="icon_darkest" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <Cube width={48} color="icon_brightest" left="95%" top="50%" />
        <Cube width={30} color="icon_brightest" left="85%" top="15%" />
        <Cube
          hiddenMobile
          width={32}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Cube width={24} color="icon_brightest" left="4%" top="20%" />
      <Cube width={52} stroke={10} color="icon_darkest" left="70%" top="60%" />
      <Cube width={48} color="icon_darkest" left="20%" top="30%" />
      <Cube width={32} color="icon_darkest" left="80%" top="70%" />
    </Divider>
  </div>
);

export default Contact;
