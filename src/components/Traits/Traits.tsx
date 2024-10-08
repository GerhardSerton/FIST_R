import { List, ListItem } from "@mui/material";
import { Trait } from "../../types/character";
import styles from "./Traits.module.css";

interface TraitsProps {
  items: Array<Trait> | undefined;
}

export default function Traits(props: TraitsProps) {
  const itemList = props.items.map((x) => {
    return (
      <>
        <ListItem className={styles.itemList}>
          <div>{x.Name}</div>
          <div className={styles.traitEffect}>{x.Effect}</div>
        </ListItem>
      </>
    );
  });
  return <List>{itemList}</List>;
}
