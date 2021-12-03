import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceManyField,
  DateField,
  SelectField,
  NumberField,
  ImageField,
  EditButton,
} from "react-admin";

export const MaterialList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Название" source="title" />
      <NumberField label="Дельта" source="delta" />
      <TextField label="Частота брака" source="defect_frequency" />
      <ImageField source="dataset" label="Датасет" />
    </Datagrid>
  </List>
);
