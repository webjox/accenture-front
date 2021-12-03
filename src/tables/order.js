// defect_percent
// integer
// Процент брака

// defect_weight
// integer
// Вес брака

// vagons
// json
// Вагоны

// id_warehouse
// integer
// Id склада

import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="number_vagon" />
      <TextField source="weight" />
      <TextField source="date" />
      <TextField source="defect_percent" />
      <TextField source="defect_weight" />
      <TextField source="vagons" />
      {/* id_warehouse */}
    </Datagrid>
  </List>
);
