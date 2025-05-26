import { EditBase, Labeled, NumberInput, ReferenceInput, SelectArrayInput, SelectInput, ShowButton, SimpleForm, TextField, Title, TopToolbar, required, useEditContext } from "react-admin";
import { Card, CardContent, Container } from "@mui/material";

const InterventionsSelected = () => {
  const {isLoading, record} = useEditContext();
  if (isLoading) return null;
  if (record || !record.Interventions) {
    const interventionList = record.Interventions.map((i: any) => i.id);
    record.interventions = interventionList;
  }
  return <ReferenceInput source="interventions" reference="interventions">
            <SelectArrayInput fullWidth label="Interventions" source="interventions" optionText="description" /> 
          </ReferenceInput>;
};

export const BuildingEdit = () => (
    <EditBase resource="buildings" >
        <TopToolbar sx={{ mr: 20 }} >
          <ShowButton />
        </TopToolbar>
        <Container >
            <Title title="Edit Building" />
            <Card >
                <CardContent>
                    <SimpleForm warnWhenUnsavedChanges spacing={{ ml: 2, xs: 43, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" >
                      <NumberInput source="fid" sx={{ width: 300 }} />
                      <Labeled>
                        <TextField source="buildingId" label="Building ID" validate={required()} sx={{ width: 500, ml: 3 }} resettable />
                      </Labeled>
                      <NumberInput source="floors" sx={{ width: 150, ml: 3 }} defaultValue={0} min={0} max={50} />
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
                      <InterventionsSelected />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Container>
    </EditBase>
);