import * as React from "react";
import { Card } from "../components/card";
import styles from "./dashboard.module.css";
import { List, Datagrid, TextField, DateField } from "react-admin";

export const Dashboard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <List {...props} className={styles.listPage}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField label="Номер вагона" source="number_vagon" />
          <TextField label="Вес" source="weight" />
          <DateField label="Дата" source="date" />
          <TextField label="Процент дефекта" source="defect_percent" />
          <TextField label="Вес дефекта" source="defect_weight" />
          <TextField label="Вагоны" source="vagons" />
        </Datagrid>
      </List>
    </div>
  );
};
