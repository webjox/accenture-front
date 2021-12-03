import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceManyField,
  DateField,
  EditButton,
} from "react-admin";

export const MaterialList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="defect_frequency" />
      <ReferenceManyField label="Датасет" reference="comments" target="post_id">
        <Datagrid>
          <TextField source="body" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </Datagrid>
  </List>
);
