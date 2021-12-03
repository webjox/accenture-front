import * as React from "react";
import { List, Datagrid, TextField, SelectField } from "react-admin";

export const VagonList = (props) => (
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
      <TextField source="auto_number" />
      <TextField source="weight" />
      <TextField source="status" />
      <TextField source="fixation" />
      <TextField source="declared_rejection_rate" />
      <TextField source="actual_scrap_rate" />
      <TextField source="defect" />
      <TextField source="pure_material" />
      <SelectField
        source="id_provider"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
      <SelectField
        source="id_reception_point"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
    </Datagrid>
  </List>
);
