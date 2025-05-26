import { EditBase, ShowButton, SimpleForm, TextInput, Title, TopToolbar, required } from "react-admin";
import { Card, CardContent, Container } from "@mui/material";

export const CommonEdit = (resource:string, title: string) => (
    <EditBase resource={resource} >
        <TopToolbar sx={{ mr: 20 }} >
          <ShowButton />
        </TopToolbar>
        <Container >
            <Title title={`Edit ${title}`} />
            <Card >
                <CardContent>
                    <SimpleForm warnWhenUnsavedChanges spacing={{ ml: 2, xs: 43, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" >
                      <TextInput source="description" label="Description" validate={required()} sx={{ width: 500, ml: 3 }} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Container>
    </EditBase>
);