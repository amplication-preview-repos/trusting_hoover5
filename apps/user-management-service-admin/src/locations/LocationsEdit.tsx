import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LocationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
