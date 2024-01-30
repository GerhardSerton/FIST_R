import { ReactNode } from "preact/compat";
import styles from "./SheetSections.module.css";

interface SheetSectionProps {
  title: string;
  long: boolean;
  children: ReactNode;
}

export default function SheetSections(props: SheetSectionProps) {
  const divClasses = `${styles.border} ${props.long ? styles.long : ""}`;

  return (
    <>
      <div className={divClasses}>
        <h2 class={styles.heading}>{props.title}</h2>
        {props.children}
      </div>
    </>
  );
}
