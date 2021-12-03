import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

export const ReceptionPointCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput
        source="id_technician"
        label="Техник"
        choices={[
          { id: 1, name: "1" },
          { id: 1, name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        label="Технолог"
        choices={[
          { id: 1, name: "1" },
          { id: 1, name: "2" },
        ]}
      />
      <SelectInput
        source="id_order"
        label="Заказ"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <RadioButtonGroupInput
        source="status"
        label="Статус"
        choices={[
          { id: "0", name: "Свободен" },
          { id: "1", name: "Разгружает" },
          { id: "2", name: "Опустошение тары" },
          { id: "3", name: "Выключен" },
        ]}
      />
      <TextInput label="Ссылка на трансляцию" source="stream_url" />
      <ReferenceInput
        label="Очередь вагонов"
        source="reception-point"
        reference="reception-point"
      >
        <SelectInput optionText="queue_vagons" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ReceptionPointEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput
        source="id_technician"
        label="Техник"
        choices={[
          { id: 1, name: "1" },
          { id: 1, name: "2" },
        ]}
      />
      <SelectInput
        source="id_technologist"
        label="Технолог"
        choices={[
          { id: 1, name: "1" },
          { id: 1, name: "2" },
        ]}
      />
      <SelectInput
        source="id_order"
        label="Заказ"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <RadioButtonGroupInput
        source="status"
        label="Статус"
        choices={[
          { id: "0", name: "Свободен" },
          { id: "1", name: "Разгружает" },
          { id: "2", name: "Опустошение тары" },
          { id: "3", name: "Выключен" },
        ]}
      />
      <TextInput label="Ссылка на трансляцию" source="stream_url" />
      <ReferenceInput
        label="Очередь вагонов"
        source="reception-point"
        reference="reception-point"
      >
        <SelectInput optionText="queue_vagons" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
