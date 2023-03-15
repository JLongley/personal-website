/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Cube from "../../../components/cube";

import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
// @ts-ignore
import ProjectsMDX from "@lekoarts/gatsby-theme-cara/src/sections/projects";

const Projects = ({
  offset = 1,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={offset - 0.2}
      factor={factor + 0.3}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Cube width={32} color="icon_brightest" left="85%" top="75%" />
        <Cube width={48} color="icon_teal" left="70%" top="20%" />
        <Cube width={34} color="icon_indigo3" left="25%" top="5%" />
        <Cube
          hiddenMobile
          width={112}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Cube
          hiddenMobile
          width={64}
          color="icon_indigo3"
          left="20%"
          top="90%"
        />
        <Cube width={48} color="icon_brightest" left="90%" top="30%" />
        <Cube width={64} color="icon_indigo4" left="70%" top="90%" />
        <Cube hiddenMobile width={56} color="icon_teal" left="18%" top="75%" />
        <Cube width={24} color="icon_brightest" left="75%" top="10%" />
        <Cube
          hiddenMobile
          width={36}
          color="icon_indigo3"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Cube
        hiddenMobile
        width={24}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Cube width={48} color="icon_indigo1" left="80%" top="60%" />
      <Cube width={24} color="icon_indigo3" left="10%" top="10%" />
      <Cube width={48} color="icon_indigo4" left="29%" top="26%" />
      <Cube width={64} color="icon_indigo1" left="75%" top="30%" />
      <Cube width={32} color="icon_indigo4" left="80%" top="70%" />
    </Divider>
  </div>
);

export default Projects;
