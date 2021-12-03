import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SelectField,
  ReferenceField,
} from "react-admin";

export const ReceptionPointList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <SelectField
        source="id_technician"
        label="Техник"
        choices={[
          { id: 1, name: 1 },
          { id: 2, name: 2 },
        ]}
      />
      <SelectField
        source="id_technologist"
        label="Технолог"
        choices={[
          { id: 1, name: 1 },
          { id: 2, name: 2 },
        ]}
      />
      <SelectField
        source="id_order"
        label="Заказ"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectField
        source="status"
        label="Статус"
        choices={[
          { id: "0", name: "Свободен" },
          { id: "1", name: "Разгружает" },
          { id: "2", name: "Опустошение тары" },
          { id: "3", name: "Выключен" },
        ]}
      />
      <TextField label="Ссылка на трансляцию" source="stream_url" />
      <ReferenceField
        label="Очередь вагонов"
        source="reception-point"
        reference="reception-point"
      >
        <SelectField optionText="queue_vagons" />
      </ReferenceField>
    </Datagrid>
  </List>
);
