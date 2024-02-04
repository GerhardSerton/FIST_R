import { List, ListItem } from "@mui/material";
import styles from "./Inventory.module.css";
import { Item } from "../../types/character";

interface InventoryProps {
  items: Array<Item> | undefined;
}

export default function Inventory(props: InventoryProps) {
  const itemList = props.items.map((x) => {
    return (
      <>
        <ListItem key={x.Text} className={styles.listItem}>
          &#x2022; {x.Text}
        </ListItem>
      </>
    );
  });
  return <List>{itemList}</List>;
}
