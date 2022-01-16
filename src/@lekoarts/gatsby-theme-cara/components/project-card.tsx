/** @jsx jsx */
import { jsx } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
};

const ProjectCard = ({ link, title, children }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: "linear-gradient(to left, #3c366b 0%, #4c51bf 100%)",
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
        background: "linear-gradient(10deg, #3c366b 0%, #4c51bf 100%)",
      },
    }}
  >
    <div
      sx={{
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        paddingBottom: "1rem",
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
      {children}
    </div>
  </a>
);

export default ProjectCard;
