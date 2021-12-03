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
  SelectField,
  required,
  ArrayInput,
  ImageInput,
  ImageField,
  NumberInput,
  SimpleFormIterator,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const MaterialCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" validate={required()} />
      <NumberInput source="defect_frequency" validate={required()} />
      <NumberInput source="delta" validate={required()} />
      <ImageInput
        multiple
        source="dataset"
        label="Related pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const MaterialEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <NumberInput source="defect_frequency" validate={required()} />
      <NumberInput source="delta" validate={required()} />
      <ImageInput
        multiple
        source="dataset"
        label="Related pictures"
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
