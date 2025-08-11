import { List, Datagrid, Pagination, TextField, WithListContext, ArrayField, EditButton, DeleteWithConfirmButton } from "react-admin";
import { Chip, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';

const BuildingPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

export const BuildingList = () => (
    <List title={"PN Building Dashboard"} pagination={<BuildingPagination />} >
        <Datagrid expand={ <InterventionPanel /> } rowClick="show" >
            <TextField source="fid" />
            <TextField label="Building Id" source="buildingId" />
            <TextField source="floors" />
            <TextField label="Cultural Heritage" source="isCulturalHeritage" />
            <TextField label="Culturally Significant Area" source="isCulturallySignificantArea" />
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

const InterventionPanel = () => (
  <ArrayField label="Interventions" source="Interventions" perPage={6}>
    <WithListContext render={({ data }) => (
      <Stack direction="row" spacing={1} >
        {data.map(intervention => (
          <Chip key={intervention.id} label={intervention.description} icon={<InfoIcon color="primary" />} color="primary" />
        ))}
      </Stack>
    )} />
  </ArrayField>
);
