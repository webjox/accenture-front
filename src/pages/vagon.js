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
        label="Техник"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        label="Технолог"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <TextInput label="Номер авто" source="auto_number" />
      <NumberInput label="Вес" source="weight" />
      <RadioButtonGroupInput
        label="Статус"
        source="status"
        choices={[
          { id: "0", name: "Ожидает" },
          { id: "1", name: "На проверке" },
          { id: "2", name: "Разгружено" },
          { id: "3", name: "Брак" },
        ]}
      />
      <NumberInput label="Фиксированные данные" source="fixation" />
      <NumberInput
        label="Заявленный процент брака (дельта)"
        source="declared_rejection_rate"
      />
      <NumberInput
        label="Фактический процент брака"
        source="actual_scrap_rate"
      />
      <TextInput label="Брак в тоннах" source="defect" />
      <TextInput label="Чистое сырьё без брака" source="pure_material" />
      <SelectInput
        label="Поставщик"
        source="id_provider"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        label="Пункт приема"
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
        label="Техник"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        label="Технолог"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <TextInput label="Номер авто" source="auto_number" />
      <NumberInput label="Вес" source="weight" />
      <RadioButtonGroupInput
        label="Статус"
        source="status"
        choices={[
          { id: "0", name: "Ожидает" },
          { id: "1", name: "На проверке" },
          { id: "2", name: "Разгружено" },
          { id: "3", name: "Брак" },
        ]}
      />
      <NumberInput label="Фиксированные данные" source="fixation" />
      <NumberInput
        label="Заявленный процент брака (дельта)"
        source="declared_rejection_rate"
      />
      <NumberInput
        label="Фактический процент брака"
        source="actual_scrap_rate"
      />
      <TextInput label="Брак в тоннах" source="defect" />
      <TextInput label="Чистое сырьё без брака" source="pure_material" />
      <SelectInput
        label="Поставщик"
        source="id_provider"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectInput
        label="Пункт приема"
        source="id_reception_point"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
