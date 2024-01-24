import * as React from "react";
import fistLogo from "../../assets/FIST Logo.png";
import Button from "@mui/material/Button";
import styles from "./KIAButton.module.css";
import { useState } from "react";

interface KIAButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export default function KIAButton(props: KIAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = `${styles.kiaButton} ${styles.hidden}`;
  return (
    <div className={styles.kiaContainer} onClick={() => !props.disabled && props.onClick()}>
      <Button className={buttonClasses} variant="contained" disabled={props.disabled}>
        K.I.A.
      </Button>
      <img
        src={fistLogo}
        alt="Preact logo"
        className={styles.fistLogoImage}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
    </div>
  );
}
