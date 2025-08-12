import { NumberField, Labeled, ShowBase, SimpleShowLayout, TextField, Title, ReferenceField, ArrayField, WithListContext, TopToolbar, EditButton, BooleanField, DeleteWithConfirmButton } from "react-admin";
import { Card, Chip, CardContent, Container, Stack } from "@mui/material";
import InfoIcon from '@mui/icons-material/InfoOutlined';

export const BuildingShow = () => (
    <ShowBase resource="buildings">
        <Container>
          <TopToolbar >
            <EditButton />
            <DeleteWithConfirmButton />
          </TopToolbar>
          <Title title="Show Building" />
            <Card>
                <CardContent>
                    <SimpleShowLayout >
                      <Stack spacing={{ ml: 2, xs: 43, sm: 5 }} direction="row" useFlexGap flexWrap="wrap" >
                        <Labeled>
                          <NumberField source="fid" sx={{ width: 100 }} />
                        </Labeled>
                        <Labeled sx={{ ml: 10 }}>
                          <TextField source="buildingId" label="Building ID" sx={{ width: 150 }} />
                        </Labeled>
                        <Labeled sx={{ ml: 10 }}>
                          <NumberField source="floors" sx={{ width: 80 }} />
                        </Labeled>
                        <Labeled sx={{ ml: 10 }}>
                          <BooleanField source="isCulturalHeritage" label="Cultural Heritage" sx={{ width: 100 }} />
                        </Labeled>
                        <Labeled sx={{ ml: 10 }}>
                          <BooleanField source="isCulturallySignificantArea" label="Culturally Significant Area" sx={{ width: 100 }} />
                        </Labeled>
                        <ReferenceField source="ArchitectonicAdequacyId" reference="architectonic-adequacies" >
                          <Labeled>
                            <TextField label="Architectonic Adequacy" source="description" sx={{ width: 300}} />
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="StructuralSystemId" reference="structural-systems" >
                          <Labeled sx={{ ml: 10 }}>
                            <TextField  label="Structural System" source="description" sx={{ width: 300 }} />
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="OpeningId" reference="openings" >
                          <Labeled sx={{ ml: 10 }}>
                            <TextField label="Opening" source="description" /> 
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="ConservationLevelId" reference="conservation-levels" >
                          <Labeled>
                            <TextField label="Conservation Level" source="description" sx={{ width: 300 }} /> 
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="CurrentStateId" reference="current-states" label="Current State" >
                          <Labeled sx={{ ml: 4 }}>
                            <TextField label="Current State" source="description" sx={{ width: 300 }} />
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="FacadeTypologyId" reference="facade-typologies" >
                          <Labeled sx={{ ml: 3 }}>
                            <TextField label="Facade Typology" source="description" sx={{ width: 350 }}/> 
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="RoofCoveringId" reference="roof-coverings" >
                          <Labeled>
                            <TextField label="Roof Covering" source="description" sx={{ width: 300 }} /> 
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="WallCoveringId" reference="wall-coverings" >
                          <Labeled sx={{ ml: 10 }}>
                            <TextField label="Wall Covering" source="description" sx={{ width: 300 }} /> 
                          </Labeled>
                        </ReferenceField>
                        <ReferenceField source="UseTypeId" reference="use-types" >
                          <Labeled sx={{ ml: 10 }}>
                            <TextField label="Use Type" source="description" sx={{ width: 200 }} /> 
                          </Labeled>
                        </ReferenceField>
                        <Labeled>
                          <ArrayField label="Interventions" source="Interventions" perPage={6}>
                            <WithListContext render={({ data }) => (
                              <Stack direction="row" spacing={{ ml: 1, xs: 1, sm: 2 }} useFlexGap flexWrap="wrap"  >
                                {data.map(intervention => (
                                  <Chip key={intervention.id} label={intervention.description} icon={<InfoIcon color="primary" />} color="primary" />
                                ))}
                              </Stack>
                            )} />
                          </ArrayField>
                        </Labeled>
                        <Labeled>
                          <ArrayField label="Conservations" source="Conservations" perPage={6}>
                            <WithListContext render={({ data }) => (
                              <Stack direction="row" spacing={{ ml: 1, xs: 1, sm: 2 }} useFlexGap flexWrap="wrap"  >
                                {data.map(conservation => (
                                  <Chip key={conservation.id} label={conservation.description} icon={<InfoIcon color="secondary" />} color="secondary" />
                                ))}
                              </Stack>
                            )} />
                          </ArrayField>
                        </Labeled>
                      </Stack>
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Container>
    </ShowBase>
);