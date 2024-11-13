import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LocationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
