import fistLogo from "../../assets/FIST Logo.png";
import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";

import KIAButton from "../../components/KIAButton/KIAButton";
import { Grid } from "@mui/material";
import SheetSections from "../../components/SheetSections/SheetSections";
import Barcode from "../../components/Barcode/Barcode";
import generateCharacter from "../../logic/characterGenerator";
import Character, { Role, Trait } from "../../types/character";
import { CharacterContext, ICharacterContext } from "../../components/Context/CharacterContext";

export function Home() {
  const [charState, setCharState] = useState<Character>(undefined);
  const [data, setData] = useState<{ roles: Role[]; traits: Trait[] }>(undefined);
  const isReady = useMemo(() => !!charState && !!data, [charState, data]);
  const charProvider = useMemo<ICharacterContext>(
    () => ({ character: charState, setCharacter: setCharState }),
    [charState]
  );
  useEffect(() => {
    const fetchAndLoad = async () => {
      try {
        const respRoles = await fetch("roles.json");
        if (!respRoles.ok) {
          return;
        }
        const roles = await respRoles.json();
        const respTrait = await fetch("traits.json");
        if (!respTrait.ok) {
          return;
        }
        const traits = await respTrait.json();
        setData({ roles, traits });
        setCharState(generateCharacter(roles, traits));
      } catch (e) {
        console.error(e);
      }
    };
    fetchAndLoad();
  }, []);

  useEffect(() => {
    // TODO: Remove
    if (charState) {
      console.log(`Character ${charState.name}: `, JSON.parse(JSON.stringify(charState)));
    }
  }, [charState]);

  return (
    <CharacterContext.Provider value={charProvider}>
      <div class="home">
        <Grid container className="sideLogo">
          <Grid direction={"column"} xs={12} className="sideLogoItem">
            <Barcode />
          </Grid>
        </Grid>
        <div>
          <Grid container>
            <Grid item xs={12}>
              <KIAButton
                disabled={!isReady}
                onClick={() => {
                  setCharState(generateCharacter(data.roles, data.traits));
                }}
              />
            </Grid>
          </Grid>
          <Grid container direction={"column"} className="container">
            <Grid item xs={6} className="sector">
              <SheetSections title="" long={false} />
            </Grid>
            <Grid item xs={6} className="sector">
              <SheetSections title="Inventory" long={false} />
            </Grid>
            <Grid item xs={6} className="sector traits">
              <SheetSections title="Traits" long={true} />
            </Grid>
          </Grid>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}
