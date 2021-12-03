import * as React from "react";
import {
  List,
  Datagrid,
  NumberField,
  SelectField,
  ReferenceField,
} from "react-admin";

export const Warehouse = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField label="Наполненность, %" source="fullness" />
      <NumberField label="Общий объем" source="volume" />
      <ReferenceField
        label="Пункты приема"
        source="reception-point"
        reference="reception-point"
      >
        <SelectField optionText="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);
