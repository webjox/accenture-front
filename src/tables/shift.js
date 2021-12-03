import * as React from "react";
import { List, Datagrid, TextField, SelectField } from "react-admin";

export const ShiftList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <SelectField
        source="id_technician"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
      <SelectField
        source="id_technologist"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
      <TextField source="date_start" />
      <TextField source="date_end" />
      <TextField source="orders" />
    </Datagrid>
  </List>
);
