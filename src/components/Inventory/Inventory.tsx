import { List, ListItem } from "@mui/material";

interface InventoryProps {
  items: Array<string> | undefined;
}

export default function KIAButton(props: InventoryProps) {
  const itemList = props.items.map((x) => {
    return (
      <>
        <ListItem>{x}</ListItem>
      </>
    );
  });
  return <List>{itemList}</List>;
}
