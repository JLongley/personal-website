/** @jsx jsx */
import { jsx } from "theme-ui";

import Eyes from "./eyes";
import JimBlankEyesImg from "./Jim_blank_eyes.png";
import JimNoEyesImg from "./Jim_no_eyes.png";

const Headshot = ({ width, left, top, borderColor }: HeadshotProps) => (
	<div
		sx={{
			position: `absolute`,
			left,
			top,
			width,
			height: width,
		}}
	>
		<img
			sx={{
				position: `absolute`,
				width: "100%",
				height: "100%",
				// width,
				// height: width,
				border: "10px solid",
				borderColor,
				borderRadius: "50%",
			}}
			src={JimBlankEyesImg}
		/>
		<Eyes />
		<img
			sx={{
				// visibility: "hidden",
				position: `absolute`,
				width,
				height: width,
				border: "10px solid",
				borderColor,
				borderRadius: "50%",
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
