import { List, ListItem } from "@mui/material";
import { Role, Trait } from "../../types/character";
import styles from "./RoleBlock.module.css";

interface RoleProps {
  role: Role | undefined;
}

export default function RoleBlock(props: RoleProps) {
  return (
    <>
      <div>{props.role?.Name ?? ""}</div>
      <div className={styles.roleText}>{props.role?.Text ?? ""}</div>
    </>
  );
}
