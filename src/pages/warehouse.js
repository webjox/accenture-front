import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
  maxValue,
} from "react-admin";

export const WarehouseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="fullness" validate={(required(), maxValue(100))} />
      <NumberInput source="volume" validate={required()} />
      <ReferenceInput
        label="Пункты приема"
        source="reception-point"
        reference="reception-point"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const WarehouseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="fullness" validate={(required(), maxValue(100))} />
      <NumberInput source="volume" validate={required()} />
      <ReferenceInput
        label="Пункты приема"
        source="reception-point"
        reference="reception-point"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
