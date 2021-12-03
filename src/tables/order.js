import * as React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Номер вагона" source="number_vagon" />
      <TextField label="Вес" source="weight" />
      <DateField label="Дата" source="date" />
      <TextField label="Процент дефекта" source="defect_percent" />
      <TextField label="Вес дефекта" source="defect_weight" />
      <TextField label="Вагоны" source="vagons" />
      {/* id_warehouse */}
    </Datagrid>
  </List>
);
