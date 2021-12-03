import * as React from "react";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Warehouse } from "./tables/warehouse";
import { OrderList } from "./tables/order";
import { ReceptionPointList } from "./tables/reception_point";
import { MaterialList } from "./tables/material";
import { ShiftList } from "./tables/shift";
import { VagonList } from "./tables/vagon";
import { WorkerList } from "./tables/workers";

import { WarehouseCreate, WarehouseEdit } from "./pages/warehouse";
import { WorkerCreate, WorkerEdit } from "./pages/workers";
import { OrderCreate, OrderEdit } from "./pages/order";
import {
  ReceptionPointCreate,
  ReceptionPointEdit,
} from "./pages/reception_point";
import { ShiftCreate, ShiftEdit } from "./pages/shift";
import { VagonCreate, VagonEdit } from "./pages/vagon";
import { MaterialCreate, MaterialEdit } from "./pages/material";
import { Dashboard } from "./pages/dashboard";

const dataProvider = jsonServerProvider(
  "http://185.22.234.115:7777/accenture-webjox.ru/api"
);

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");
const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      options={{ label: "Склады" }}
      name="warehouse"
      list={Warehouse}
      create={WarehouseCreate}
      edit={WarehouseEdit}
    />
    <Resource
      options={{ label: "Сырье" }}
      name="material"
      list={MaterialList}
      create={MaterialCreate}
      edit={MaterialEdit}
    />
    <Resource
      options={{ label: "Пункты приема" }}
      name="reception-point"
      list={ReceptionPointList}
      create={ReceptionPointCreate}
      edit={ReceptionPointEdit}
    />
    <Resource
      options={{ label: "Заказы" }}
      name="order"
      list={OrderList}
      create={OrderCreate}
      edit={OrderEdit}
    />
    <Resource
      options={{ label: "Вагоны" }}
      name="vagon"
      list={VagonList}
      create={VagonCreate}
      edit={VagonEdit}
    />
    <Resource
      options={{ label: "Смены" }}
      name="shift"
      list={ShiftList}
      create={ShiftCreate}
      edit={ShiftEdit}
    />
    <Resource
      options={{ label: "Работники" }}
      name="workers"
      list={WorkerList}
      create={WorkerCreate}
      edit={WorkerEdit}
    />
    <Resource
      options={{ label: "Дашборд" }}
      name="order-analytics"
      list={Dashboard}
    />
  </Admin>
);

export default App;
