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
    />
    <Resource
      name="conservation-levels"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="current-states"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="facade-typologies"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="interventions"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="openings"
      list={ListGuesser}
      show={ShowGuesser}
    />
     <Resource
      name="roof-coverings"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="structural-systems"
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="use-types"
      list={ListGuesser}
      show={ShowGuesser}
    />
     <Resource
      name="wall-coverings"
      list={ListGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
