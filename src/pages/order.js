import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  NumberInput,
  required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="number_vagon" />
      <NumberInput source="weight" />
      <NumberInput source="defect_percent" />
      <NumberInput source="defect_weight" />
      <DateField source="date" />
      <TextInput source="vagons" />
    </SimpleForm>
  </Create>
);

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <NumberInput source="number_vagon" />
      <NumberInput source="weight" />
      <NumberInput source="defect_percent" />
      <NumberInput source="defect_weight" />
      <DateField source="date" />
      <TextInput source="vagons" />
    </SimpleForm>
  </Edit>
);
