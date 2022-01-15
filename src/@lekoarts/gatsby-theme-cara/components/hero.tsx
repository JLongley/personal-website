/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Headshot from "../../../components/headshot";
import Cube from "../../../components/cube";

import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
// @ts-ignore
import Intro from "../sections/intro";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Headshot width={360} left="45%" top="5%" borderColor="icon_blue" />
        {/*<Cube width={360} left="45%" top="5%" color="icon_blue" />*/}
        <Cube width={40} left="70%" top="5%" color="icon_blue" />
        <Cube
          hiddenMobile
          width={180}
          color="icon_orange"
          left="10%"
          top="10%"
        />
        <Cube icon="hexa" width={48} color="icon_red" left="60%" top="70%" />
        <Cube icon="box" width={18} color="icon_darker" left="30%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Cube hiddenMobile width={16} color="icon_blue" left="80%" top="-10%" />
        <Cube
          width={36}
          stroke={2}
          color="icon_brightest"
          left="90%"
          top="60%"
        />
        <Cube width={56} stroke={12} color="icon_darker" left="7%" top="90%" />
        <Cube width={48} color="icon_darkest" left="30%" top="65%" />
        <Cube width={60} color="icon_pink" left="28%" top="15%" />
        <Cube
          icon="circle"
          width={24}
          stroke={3}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
        <Cube
          hiddenMobile
          width={40}
          color="icon_darkest"
          left="38%"
          top="6%"
        />
      </UpDownWide>
      <Cube hiddenMobile width={96} color="icon_darker" left="5%" top="70%" />
      <Cube width={30} color="icon_darkest" stroke={5} left="4%" top="20%" />
      <Cube width={48} stroke={8} color="icon_darkest" left="75%" top="60%" />
      <Cube width={48} color="icon_darkest" left="95%" top="90%" />
      <Cube hiddenMobile width={128} color="icon_darker" left="40%" top="80%" />
      <Cube width={36} color="icon_darker" left="25%" top="5%" />
      <Cube width={262} hiddenMobile color="icon_green" left="95%" top="5%" />
      <Cube hiddenMobile width={264} color="icon_purple" left="60%" top="90%" />
      <Cube width={30} color="icon_darkest" left="10%" top="10%" />
      <Cube width={50} color="icon_darkest" left="40%" top="30%" />
      <Cube width={54} color="icon_darker" left="10%" top="50%" />
      <Cube width={24} color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
);

export default Hero;
