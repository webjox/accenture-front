import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  SelectArrayInput,
  required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const ShiftCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <SelectInput
        source="id_technologist"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technician"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectArrayInput
        source="orders"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <DateInput label="Дата начала" source="date_start" />
      <DateInput label="Дата окончания" source="date_end" />
      <TextInput label="Заказы" source="orders" />
    </SimpleForm>
  </Create>
);

export const ShiftEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <SelectInput
        source="id_technologist"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technician"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectArrayInput
        source="orders"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <DateInput label="Дата начала" source="date_start" />
      <DateInput label="Дата окончания" source="date_end" />
      <TextInput label="Заказы" source="orders" />
    </SimpleForm>
  </Edit>
);
