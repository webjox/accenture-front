import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  required,
  ImageInput,
  ImageField,
  NumberInput,
} from "react-admin";

export const MaterialCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Название" source="title" validate={required()} />
      <NumberInput
        label="Частота брака"
        source="defect_frequency"
        validate={required()}
      />
      <NumberInput label="Дельта" source="delta" validate={required()} />
      <ImageInput multiple source="dataset" label="Датасет" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const MaterialEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Название" source="title" validate={required()} />
      <NumberInput
        label="Частота брака"
        source="defect_frequency"
        validate={required()}
      />
      <NumberInput label="Дельта" source="delta" validate={required()} />
      <ImageInput multiple source="dataset" label="Датасет" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
