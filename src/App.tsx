import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  defaultTheme
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BuildingList } from "./building/buildingList";
import { BuildingCreate } from "./building/buildingCreate";
import { AppLayout } from "./AppLayout";
import { BuildingEdit } from "./building/buildingEdit";
import { BuildingShow } from "./building/buildingShow";
import { CommonCreate } from "./common/commonCreate";
import { CommonEdit } from "./common/commonEdit";

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

export const App = () => (
  <Admin layout={AppLayout} dataProvider={dataProvider} authProvider={authProvider} theme={lightTheme} darkTheme={darkTheme} >
    <Resource 
      name="buildings"
      list={BuildingList}
      create={BuildingCreate}
      edit={BuildingEdit}
      show={BuildingShow}
    />
     <Resource
      name="architectonic-adequacies"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("architectonic-adequacies", "Architectonic Adequacies")}
      edit={() => CommonEdit("architectonic-adequacies", "Architectonic Adequacies")}
    />
    <Resource
      name="conservation-levels"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("conservation-levels", "Conservation Levels")}
      edit={() => CommonEdit("conservation-levels", "Conservation Levels")}
    />
    <Resource
      name="current-states"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("current-states", "Current States")}
      edit={() => CommonEdit("current-states", "Current States")}
    />
    <Resource
      name="facade-typologies"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("facade-typologies", "Facade Typologies")}
      edit={() => CommonEdit("facade-typologies", "Facade Typologies")}
    />
    <Resource
      name="interventions"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("interventions", "Interventions")}
      edit={() => CommonEdit("interventions", "Interventions")}
    />
    <Resource
      name="conservations"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("conservations", "Conservations")}
      edit={() => CommonEdit("conservations", "Conservations")}
    />
    <Resource
      name="openings"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("openings", "Openings")}
      edit={() => CommonEdit("openings", "Openings")}
    />
     <Resource
      name="roof-coverings"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("roof-coverings", "Roof Coverings")}
      edit={() => CommonEdit("roof-coverings", "Roof Coverings")}
    />
    <Resource
      name="structural-systems"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("structural-systems", "Structural Systems")}
      edit={() => CommonEdit("structural-systems", "Structural Systems")}
    />
    <Resource
      name="use-types"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("use-types", "Use Types")}
      edit={() => CommonEdit("use-types", "Use Types")}
    />
     <Resource
      name="wall-coverings"
      list={ListGuesser}
      show={ShowGuesser}
      create={() => CommonCreate("wall-coverings", "Wall Coverings")}
      edit={() => CommonEdit("wall-coverings", "Wall Coverings")}
    />
  </Admin>
);
