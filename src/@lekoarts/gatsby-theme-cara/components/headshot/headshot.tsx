/** @jsx jsx */
import { jsx } from "theme-ui";

import Eyes from "./eyes";
import Jim from "./Jim.jpg";

const Headshot = ({ width, left, top, borderColor }: HeadshotProps) => (
	<div
		sx={{
			position: `absolute`,
			left,
			top,
		}}
	>
		<img
			sx={{
				position: `relative`,
				width,
				height: width,
				border: "10px solid",
				borderColor,
				borderRadius: "50%",
			}}
			src={Jim}
		/>
		<Eyes />
	</div>
);

type HeadshotProps = {
	width: number;
	left: string;
	top: string;
	borderColor: string;
};

export default Headshot;
