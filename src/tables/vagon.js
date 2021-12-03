import * as React from "react";
import {
  List,
  NumberField,
  TextField,
  Datagrid,
  SelectField,
} from "react-admin";

export const VagonList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Техник" source="id_technician" />
      <TextField label="Технолог" source="id_technologist" />
      <TextField label="Номер авто" source="auto_number" />
      <NumberField label="Вес" source="weight" />
      <TextField label="Статус" source="" />
      <SelectField
        label="Пункт приема"
        source="status"
        choices={[
          { id: "0", name: "Ожидает" },
          { id: "1", name: "На проверке" },
          { id: "2", name: "Разгружено" },
          { id: "3", name: "Брак" },
        ]}
      />
      <NumberField label="Фиксированные данные" source="fixation" />
      <NumberField
        label="Заявленный процент брака (дельта)"
        source="declared_rejection_rate"
      />
      <NumberField
        label="Фактический процент брака"
        source="actual_scrap_rate"
      />
      <TextField label="Брак в тоннах" source="defect" />
      <TextField label="Чистое сырьё без брака" source="pure_material" />
      <SelectField
        label="Поставщик"
        source="id_provider"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
      <SelectField
        label="Пункт приема"
        source="id_reception_point"
        choices={[
          { id: "1", name: "1" },
          { id: "2", name: "2" },
        ]}
      />
    </Datagrid>
  </List>
);
