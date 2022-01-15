/** @jsx jsx */
import { jsx } from "theme-ui";

import Eyes from "./eyes";
import JimBlankEyesImg from "./Jim_blank_eyes.png";
// import JimNoEyesImg from "./Jim_transparent.png";
import JimNoEyesImg from "./Jim_no_eyes.png";

const Headshot = ({ width, left, top, borderColor }: HeadshotProps) => (
	<div
		sx={{
			boxSizing: "border-box",
			position: `absolute`,
			width,
			height: width,
		}}
	>
		<img
			sx={{
				position: `absolute`,
				width: "100%",
				height: "100%",
			}}
			src={JimBlankEyesImg}
		/>
		<Eyes />
		<img
			sx={{
				boxSizing: "border-box",
				// visibility: "hidden",
				position: `absolute`,
				width: "100%",
				height: "100%",
			}}
			src={JimNoEyesImg}
		/>
	</div>
);

type HeadshotProps = {
	width: number;
	left: string;
	top: string;
	borderColor: string;
};

export default Headshot;
