import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  RadioButtonGroupInput,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  SelectInput,
  required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const ReceptionPointCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
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
      <SelectInput
        source="id_order"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <RadioButtonGroupInput
        source="status"
        choices={[
          { id: "0", name: "Свободен" },
          { id: "1", name: "Разгружает" },
          { id: "2", name: "Опустошение тары" },
          { id: "3", name: "Выключен" },
        ]}
      />
      <TextInput source="stream_url" />
      <TextInput source="id_order" />
      <SelectInput
        source="id_order"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const ReceptionPointEdit = (props) => (
  <Edit {...props}>
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
      <SelectInput
        source="id_order"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <RadioButtonGroupInput
        source="status"
        choices={[
          { id: "0", name: "Свободен" },
          { id: "1", name: "Разгружает" },
          { id: "2", name: "Опустошение тары" },
          { id: "3", name: "Выключен" },
        ]}
      />
      <TextInput source="stream_url" />
      <TextInput source="id_order" />
      <SelectInput
        source="id_order"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
