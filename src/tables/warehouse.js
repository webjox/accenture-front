import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const Warehouse = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullness" />
      <TextField source="volume" />
    </Datagrid>
  </List>
);
