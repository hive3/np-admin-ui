import { CreateBase, SimpleForm, TextInput, Title, required } from "react-admin";
import { Card, CardContent, Container } from "@mui/material";

export const CommonCreate = (resource:string, title:string) => (
    <CreateBase resource={resource}>
        <Container>
            <Title title={`Create ${title}`} />
            <Card >
                <CardContent>
                    <SimpleForm warnWhenUnsavedChanges spacing={{ ml: 2, xs: 43, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" >
                      <TextInput source="description" label="Description" validate={required()} sx={{ width: 500, ml: 3 }} resettable />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Container>
    </CreateBase>
);