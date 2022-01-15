import * as React from "react";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Cube from "../../../components/cube";

import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";

// @ts-ignore
import AboutMDX from "@lekoarts/gatsby-theme-cara/src/sections/about";

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Cube hiddenMobile width={40} color="icon_blue" left="50%" top="75%" />
        <Cube
          hiddenMobile
          width={32}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Cube width={32} color="icon_darkest" left="25%" top="5%" />
        <Cube
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <Cube hiddenMobile width={96} color="icon_purple" left="5%" top="80%" />
        <Cube width={48} color="icon_brightest" left="95%" top="50%" />
        <Cube hiddenMobile width={30} color="icon_dark" left="85%" top="15%" />
        <Cube
          hiddenMobile
          width={32}
          color="icon_darker"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Cube
        hiddenMobile
        width={30}
        stroke={5}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Cube width={48} color="icon_darkest" left="70%" top="60%" />
      <Cube width={30} color="icon_orange" left="10%" top="10%" />
      <Cube icon="box" width={48} color="icon_darker" left="20%" top="30%" />
      <Cube width={32} color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export default About;
