/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      <Link
        aria-label="Link to the site's GitHub repository"
        sx={{ ml: 2 }}
        href="https://github.com/JLongley/personal-website"
        sx={{
          fontWeight: `semibold`,
          color: `text`,
          a: { color: `text` },
        }}
      >
        Source Code
      </Link>
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>

        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
