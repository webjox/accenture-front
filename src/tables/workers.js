import * as React from "react";
import { List, Datagrid, TextField, SelectField } from "react-admin";

export const WorkerList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="ФИО" source="name" />
      <TextField label="Статус" source="status" />
      <TextField label="Тип" source="type" />
      <SelectField
        label="Пункты приема"
        source="reception_point"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
        ]}
      />
    </Datagrid>
  </List>
);
