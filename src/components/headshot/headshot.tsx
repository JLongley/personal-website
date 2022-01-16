/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Eyes from "./eyes";
import { useClick } from "../../hooks/useClick";
import JimBlankEyesImg from "./Jim_blank_eyes.png";
import JimNoEyesImg from "./Jim_no_eyes.png";
import Jim from "./Jim_transparent.png";

const Headshot = ({ width, left, top, borderColor }: HeadshotProps) => {
	const [eyes, setEyes] = useState(false);

	const handleClick = () => {
		setEyes(!eyes);
	};

	useClick(handleClick);

	return (
		<div
			sx={{
				boxSizing: "border-box",
				position: `absolute`,
				width,
				height: width,
			}}
		>
			{eyes ? (
				<div>
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
							position: `absolute`,
							width: "100%",
							height: "100%",
						}}
						src={JimNoEyesImg}
					/>
				</div>
			) : (
				<img
					sx={{
						boxSizing: "border-box",
						position: `absolute`,
						width: "100%",
						height: "100%",
					}}
					src={Jim}
				/>
			)}
		</div>
	);
};

type HeadshotProps = {
	width: number;
	left: string;
	top: string;
	borderColor: string;
};

export default Headshot;
