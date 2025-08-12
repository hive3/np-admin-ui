import { BooleanInput, CreateBase, NumberInput, ReferenceInput, SelectArrayInput, SelectInput, SimpleForm, TextInput, Title, required } from "react-admin";
import { Card, CardContent, Container } from "@mui/material";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const BuildingCreate = () => (
    <CreateBase resource="buildings">
        <Container>
            <Title title="Create Building" />
            <Card >
                <CardContent>
                    <SimpleForm warnWhenUnsavedChanges spacing={{ ml: 2, xs: 43, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" >
                      <NumberInput source="fid" sx={{ width: 120, mr: 3, ml: 2 }} />
                      <TextInput source="buildingId" label="Building ID" validate={required()} sx={{ width: 150, ml: 1 }} resettable />
                      <NumberInput source="floors" sx={{ width: 80, ml: 3 }} defaultValue={0} min={0} max={50} />
                      <NumberInput source="index" sx={{ width: 80, ml: 3 }} defaultValue={0.00} min={0} max={50} />
                      <Stack spacing={{ xs: 5, sm: 2 }} useFlexGap sx={{ flexWrap: 'wrap', width: 180, ml: 5 }}>
                        <Typography>Cultural Heritage</Typography>
                        <Stack spacing={{ xs: 5, ml: 2, sm: 2 }} alignItems={'center'} direction={'row'} useFlexGap sx={{ flexWrap: 'wrap' }}>
                          <Typography>NO</Typography>
                          <BooleanInput source="isCulturalHeritage" label="" defaultValue={false} sx={{ height: 40, width: 40,  ml: 1}} />
                          <Typography>YES</Typography>
                        </Stack>
                      </Stack>
                      <Stack spacing={{ xs: 5, sm: 2 }} useFlexGap sx={{ flexWrap: 'wrap', width: 190, ml: 2 }}>
                        <Typography>Culturally Significant Area</Typography>
                        <Stack spacing={{ xs: 5, ml: 2, sm: 2 }} alignItems={'center'} direction={'row'} useFlexGap sx={{ flexWrap: 'wrap' }}>
                          <Typography>NO</Typography>
                          <BooleanInput source="isCulturallySignificantArea" label="" defaultValue={false} sx={{ height: 40, width: 40,  ml: 1}} />
                          <Typography>YES</Typography>
                        </Stack>
                      </Stack>
                      <ReferenceInput source="ArchitectonicAdequacyId" reference="architectonic-adequacies" >
                        <SelectInput label="Architectonic Adequacy" source="ArchitectonicAdequacyId" optionText="description" validate={required()} sx={{ width: 300 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="StructuralSystemId" reference="structural-systems" >
                        <SelectInput label="Structural System" source="StructuralSystemId" optionText="description" validate={required()} sx={{ width: 300, ml: 12 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="OpeningId" reference="openings" >
                        <SelectInput label="Opening" source="OpeningId" optionText="description" validate={required()} sx={{ width: 200, ml: 13 }} resettable/> 
                      </ReferenceInput>
                      <ReferenceInput source="ConservationLevelId" reference="conservation-levels" >
                        <SelectInput label="Conservation Level" source="ConservationLevelId" optionText="description" validate={required()} sx={{ width: 250 }} resettable/> 
                      </ReferenceInput>
                      <ReferenceInput source="CurrentStateId" reference="current-states">
                        <SelectInput label="Current State" source="CurrentStateId" optionText="description" validate={required()} sx={{ width: 280, ml: 3 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="FacadeTypologyId" reference="facade-typologies">
                        <SelectInput label="Facade Typology" source="FacadeTypologyId" optionText="description" resettable sx={{ width: 420, ml: 4 }} /> 
                      </ReferenceInput>
                      <ReferenceInput source="RoofCoveringId" reference="roof-coverings">
                        <SelectInput label="Roof Covering" source="RoofCoveringId" optionText="description" validate={required()} sx={{ width: 220 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="WallCoveringId" reference="wall-coverings">
                        <SelectInput label="Wall Covering" source="WallCoveringId" optionText="description" validate={required()} sx={{ width: 420, ml: 4 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="UseTypeId" reference="use-types">
                        <SelectInput label="Use Type" source="UseTypeId" optionText="description" validate={required()} sx={{ width: 300, ml: 4 }} resettable /> 
                      </ReferenceInput>
                      <ReferenceInput source="interventions" reference="interventions">
                        <SelectArrayInput fullWidth label="Interventions" source="interventions" optionText="description" /> 
                      </ReferenceInput>
                      <ReferenceInput source="conservations" reference="conservations">
                        <SelectArrayInput fullWidth label="Conservations" source="conservations" optionText="description" /> 
                      </ReferenceInput>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Container>
    </CreateBase>
);