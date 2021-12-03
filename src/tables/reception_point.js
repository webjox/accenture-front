import * as React from "react";
import { List, Datagrid, TextField, SelectField } from "react-admin";

export const ReceptionPointList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <SelectField
        source="id_technologist"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
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
      <TextField source="status" />
      <TextField source="stream_url" />
      <TextField source="id_order" />
      <TextField source="queue_vagons" />
    </Datagrid>
  </List>
);
