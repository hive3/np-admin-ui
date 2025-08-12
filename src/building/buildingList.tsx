import { List, Datagrid, Pagination, TextField, WithListContext, ArrayField, EditButton, FunctionField, SimpleShowLayout } from "react-admin";
import { Chip, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';

const BuildingPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

export const BuildingList = () => (
    <List title={"PN Building Dashboard"} pagination={<BuildingPagination />} >
        <Datagrid expand={ <ExpandPanelLayout /> } rowClick="show" >
            <TextField source="fid" />
            <TextField label="Building Id" source="buildingId" />
            <TextField source="floors" />
            <FunctionField label="Cultural Heritage" sortBy="isCulturalHeritage" source="isCulturalHeritage" render={
                record => `${record?.isCulturalHeritage ? 'YES' : 'NO'}`
            } />
            <FunctionField label="Culturally Significant Area" sortBy="isCulturallySignificantArea" source="isCulturallySignificantArea" render={
                record => `${record?.isCulturallySignificantArea ? 'YES' : 'NO'}`
            } />
            <TextField label="Opening" sortBy="OpeningId" source="Opening.description" />
            <TextField label="Structural System" sortBy="StructuralSystemId" source="StructuralSystem.description" />
            <TextField label="Wall Covering" sortBy="WallCoveringId" source="WallCovering.description" />
            <TextField label="Roof Covering" sortBy="RoofCoveringId" source="RoofCovering.description" />
            <TextField label="User Type" sortBy="UseTypeId" source="UseType.description" />
            <TextField label="Current State" sortBy="CurrentStateId" source="CurrentState.description" />
            <TextField label="Conservation Level" sortBy="ConservationLevelId" source="ConservationLevel.description" />
            <TextField label="Architectonic Adequacy" sortBy="ArchitectonicAdequacyId" source="ArchitectonicAdequacy.description" />
            <TextField label="Facade Typology" sortBy="FacadeTypologyId" source="FacadeTypology.description" />
            <EditButton sx={{ fontWeight: "bold" }}/>
        </Datagrid>
    </List>
);

const ExpandPanelLayout = () => (
   <SimpleShowLayout>
      <ArrayField label="Interventions" source="Interventions" perPage={3}>
        <WithListContext render={({ data }) => (
          <Stack direction="row" spacing={{ ml: 1, xs: 1, sm: 2 }} useFlexGap flexWrap="wrap"  >
            {data.map(intervention => (
              <Chip key={intervention.id} label={intervention.description} icon={<InfoIcon color="primary" />} color="primary" />
            ))}
          </Stack>
        )} />
      </ArrayField>
      <ArrayField label="Conservations" source="Conservations" perPage={3}>
        <WithListContext render={({ data }) => (
          <Stack direction="row" spacing={{ ml: 1, xs: 1, sm: 2 }} useFlexGap flexWrap="wrap" >
            {data.map(conservation => (
              <Chip key={conservation.id} label={conservation.description} icon={<InfoIcon color="secondary" />} color="secondary" />
            ))}
          </Stack>
        )} />
      </ArrayField>
   </SimpleShowLayout>
);

