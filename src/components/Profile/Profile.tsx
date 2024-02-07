import { Grid } from "@mui/material";
import Character from "../../types/character";
import styles from "./Profile.module.css";
import agent1 from "../../assets/portraits/agent1.png";
import Attribute from "./Attribute/Attribute";

interface ProfileProps {
  character: Character;
}

export default function Profile(props: ProfileProps) {
  const forcefulDesc = "Strength, brute force, intimidation";
  const tacticalDesc = "Knowledge, skill, intelect";
  const creativeDesc = "Diplomacy, deceit, psionics";
  const reflexiveDesc = "Precision, dexterity, aim";

  const armorDesc = "Subtract from damage taken";
  const maxHpDesc = "Capacity to take damage";
  const warDiceDesc = "Luck and grit, spend for +1D6";
  const hpDesc = "Operative death occurs at 0 HP";

  return (
    <Grid container className={styles.parentContainer}>
      <Grid container item>
        <Grid item container md={5} className={styles.parentPortraitContainer}>
          <Grid item className={styles.portraitContainer}>
            <img className={styles.portrait} src={agent1} />
          </Grid>
        </Grid>
        <Grid item container md={7}>
          <Grid item container>
            <Grid item md={6} className={styles.details}>
              Name:
            </Grid>
            <Grid item md={6} className={styles.details}>
              {props?.character?.name ?? ""}
            </Grid>
            <Grid item md={6} className={styles.details}>
              Pronouns:
            </Grid>
            <Grid item md={6} className={styles.details}>
              {props?.character?.pronouns ?? ""}
            </Grid>
            <Grid item md={6} className={styles.details}>
              Role:
            </Grid>
            <Grid item md={6} className={styles.details}>
              {props?.character?.role.Name ?? ""}
            </Grid>
          </Grid>
          <Grid item container direction={"row"} className={styles.attributeGrid} columnSpacing={4}>
            <Grid item md={6}>
              <Attribute
                name={"FORCEFUL"}
                description={forcefulDesc}
                value={props?.character?.attributes.forceful ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute
                name={"TACTICAL"}
                description={tacticalDesc}
                value={props?.character?.attributes.tactical ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute
                name={"CREATIVE"}
                description={creativeDesc}
                value={props?.character?.attributes.creative ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute
                name={"REFLEXIVE"}
                description={reflexiveDesc}
                value={props?.character?.attributes.reflexive ?? 0}
              />
            </Grid>
            <Grid item md={12} />
            <Grid item md={6}>
              <Attribute
                name={"ARMOR"}
                description={armorDesc}
                value={props?.character?.armor ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute
                name={"MAX HP"}
                description={maxHpDesc}
                value={props?.character?.maxHp ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute
                name={"WAR DICE"}
                description={warDiceDesc}
                value={props?.character?.warDice ?? 0}
              />
            </Grid>
            <Grid item md={6}>
              <Attribute name={"HP"} description={hpDesc} value={props?.character?.hp ?? 0} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
