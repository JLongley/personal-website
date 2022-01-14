/** @jsx jsx */
import { jsx } from "theme-ui";

import Eyes from "./eyes";
import Jim from "./Jim.jpg";

const Headshot = ({
	width,
	icon,
	left,
	top,
	borderColor,
	hiddenMobile = false,
}: HeadshotProps) => (
	<div
		sx={{
			position: `absolute`,
			border: "10px solid",
			borderColor: "red",
			left,
			top,
		}}
	>
		<img
			sx={{
				position: `relative`,
				display: hiddenMobile ? hidden : `block`,
				border: "10px solid",
				borderColor,
				borderRadius: "50%",
				width,
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
	hiddenMobile?: boolean;
};

export default Headshot;
