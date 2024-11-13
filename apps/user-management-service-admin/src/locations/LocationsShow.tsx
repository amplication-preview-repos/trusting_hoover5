import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LocationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
