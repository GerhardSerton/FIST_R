import { List, ListItem } from "@mui/material";
import styles from "./Inventory.module.css";

interface InventoryProps {
  items: Array<string> | undefined;
}

export default function Inventory(props: InventoryProps) {
  const itemList = props.items.map((x) => {
    return (
      <>
        <ListItem className={styles.listItem}>&#x2022; {x}</ListItem>
      </>
    );
  });
  return <List>{itemList}</List>;
}
