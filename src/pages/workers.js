import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
  RadioButtonGroupInput,
} from "react-admin";

export const WorkerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <RadioButtonGroupInput
        source="type"
        choices={[
          { id: "1", name: "Свободен" },
          { id: "0", name: "Не свободен" },
        ]}
      />
      <TextInput source="status" validate={required()} />
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

export const WorkerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <RadioButtonGroupInput
        source="type"
        choices={[
          { id: "1", name: "Свободен" },
          { id: "0", name: "Не свободен" },
        ]}
      />
      <TextInput source="status" validate={required()} />
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
