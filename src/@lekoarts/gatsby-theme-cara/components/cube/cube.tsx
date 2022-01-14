/** @jsx jsx */
import { jsx } from "theme-ui";

import * as styles from "./cube.module.css";

const Cube = ({ width, left, top, color }: CubeProps) => (
  <div
    sx={{
      position: `absolute`,
      left,
      top,
      width: 20,
      height: 20,
    }}
  >
    <div className={styles.cubeContainer}>
      <div className={styles.cube}>
        <figure className={`${styles.face} ${styles.front}`} />
        <figure className={`${styles.face} ${styles.back}`} />
        <figure className={`${styles.face} ${styles.left}`} />
        <figure className={`${styles.face} ${styles.right}`} />
        <figure className={`${styles.face} ${styles.top}`} />
        <figure className={`${styles.face} ${styles.bottom}`} />
      </div>
    </div>
  </div>
);

type CubeProps = {
  width: number;
  left: string;
  top: string;
  color: string;
};

export default Cube;
