import { Grid } from "@mui/material";
import styles from "./Attribute.module.css";

interface AttributeProps {
  name: string;
  description: string;
  value: number;
}

export default function Attribute(props: AttributeProps) {
  return (
    <Grid container direction={"row"} className={styles.parentContainer} spacing={1}>
      <Grid item container direction={"column"} md={10} className={styles.textContainer}>
        <Grid className={styles.name}>{props.name}</Grid>
        <Grid className={styles.description}>{props.description}</Grid>
      </Grid>
      <Grid item md={2}>
        <div className={styles.value}>
          <div>{props.value}</div>
        </div>
      </Grid>
    </Grid>
  );
}
