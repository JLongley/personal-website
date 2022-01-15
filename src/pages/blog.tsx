import * as React from "react";
import { Link } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import { Themed } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import Cube from "../components/cube";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";

const Blog = () => (
  <Layout>
    <Seo title="Blog" />
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Cube
              hiddenMobile
              width={240}
              color="icon_orange"
              left="10%"
              top="20%"
            />
            <Cube width={192} color="icon_red" left="60%" top="70%" />
            <Cube width={32} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Cube
              hiddenMobile
              width={64}
              color="icon_blue"
              left="80%"
              top="10%"
            />
            <Cube width={48} color="icon_brightest" left="90%" top="50%" />
            <Cube width={64} color="icon_darker" left="70%" top="90%" />
            <Cube width={64} color="icon_darkest" left="30%" top="65%" />
            <Cube width={64} color="icon_pink" left="28%" top="15%" />
            <Cube width={32} color="icon_darkest" left="75%" top="10%" />
            <Cube
              hiddenMobile
              width={32}
              color="icon_darkest"
              left="45%"
              top="10%"
            />
          </UpDownWide>
          <Cube
            hiddenMobile
            width={96}
            color="icon_darker"
            left="5%"
            top="70%"
          />
          <Cube width={32} color="icon_darkest" left="4%" top="20%" />
          <Cube
            icon="circle"
            width={48}
            color="icon_darkest"
            left="50%"
            top="60%"
          />
          <Cube width={32} color="icon_darkest" left="95%" top="90%" />
          <Cube
            hiddenMobile
            width={96}
            color="icon_darker"
            left="40%"
            top="80%"
          />
          <Cube width={32} color="icon_darker" left="25%" top="5%" />
          <Cube width={246} color="icon_green" left="95%" top="5%" />
          <Cube
            hiddenMobile
            width={256}
            color="icon_purple"
            left="5%"
            top="90%"
          />
          <Cube width={32} color="icon_darkest" left="10%" top="10%" />
          <Cube width={48} color="icon_darkest" left="40%" top="30%" />
          <Cube width={64} color="icon_darker" left="10%" top="50%" />
          <Cube width={32} color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content
          sx={{ variant: `texts.bigger` }}
          speed={0.4}
          offset={0}
          factor={1}
        >
          <Inner>
            <Themed.h1>Blog</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
);

export default Blog;
