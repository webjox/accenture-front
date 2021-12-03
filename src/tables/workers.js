import * as React from "react";
import { List, Datagrid, TextField, SelectField } from "react-admin";

export const WorkerList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status" />
      <TextField source="type" />
      <SelectField
        source="reception_point"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
    </Datagrid>
  </List>
);
