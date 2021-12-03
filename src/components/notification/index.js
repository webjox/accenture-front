import { Notification } from "react-admin";

export const Alert = (props) => (
  <Notification {...props} autoHideDuration={5000} />
);
