import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput label="Номер вагона" source="number_vagon" />
      <NumberInput label="Вес" source="weight" />
      <NumberInput label="Процент дефекта" source="defect_percent" />
      <NumberInput label="Вес дефекта" source="defect_weight" />
      <DateInput label="Дата" source="date" />
      <TextInput label="Вагоны" source="vagons" />
    </SimpleForm>
  </Create>
);

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput label="Номер вагона" source="number_vagon" />
      <NumberInput label="Вес" source="weight" />
      <NumberInput label="Процент дефекта" source="defect_percent" />
      <NumberInput label="Вес дефекта" source="defect_weight" />
      <DateInput label="Дата" source="date" />
      <TextInput label="Вагоны" source="vagons" />
    </SimpleForm>
  </Edit>
);
