import * as React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

export const ShiftList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Техник" source="id_technician" />
      <TextField label="Технолог" source="id_technologist" />
      <DateField label="Дата начала" source="date_start" />
      <DateField label="Дата окончания" source="date_end" />
      <TextField label="Заказы" source="orders" />
    </Datagrid>
  </List>
);
