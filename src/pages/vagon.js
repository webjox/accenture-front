import * as React from "react";
import {
  Create,
  SelectInput,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
} from "react-admin";

export const VagonCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <SelectInput
        source="id_technician"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <TextInput source="auto_number" />
      <NumberInput source="weight" />
      <RadioButtonGroupInput
        source="status"
        choices={[
          { id: "0", name: "Ожидает" },
          { id: "1", name: "На проверке" },
          { id: "2", name: "Разгружено" },
          { id: "3", name: "Брак" },
        ]}
      />
      <NumberInput source="fixation" />
      <NumberInput source="declared_rejection_rate" />
      <NumberInput source="actual_scrap_rate" />
      <TextInput source="defect" />
      <TextInput source="pure_material" />
      <SelectInput
        source="id_provider"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_reception_point"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const VagonEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <SelectInput
        source="id_technician"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <TextInput source="auto_number" />
      <NumberInput source="weight" />
      <RadioButtonGroupInput
        source="status"
        choices={[
          { id: "0", name: "Ожидает" },
          { id: "1", name: "На проверке" },
          { id: "2", name: "Разгружено" },
          { id: "3", name: "Брак" },
        ]}
      />
      <NumberInput source="fixation" />
      <NumberInput source="declared_rejection_rate" />
      <NumberInput source="actual_scrap_rate" />
      <TextInput source="defect" />
      <TextInput source="pure_material" />
      <SelectInput
        source="id_provider"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_reception_point"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
