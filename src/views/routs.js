import {
  LOGIN_ROUTE,
  DASHBOARD,
  TICKETS,
  CURRENT_TASK,
} from "../utils/constants";
import ScreenAuthorization from "./ScreenAuthorization";
import ScreenDashboard from "./ScreenDashboard";
import ScreenTickets from "./ScreenTickets";
import ScreenTask from "./ScreenTask";
// import Login from "../components/Login";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <ScreenAuthorization />,
  },
];

export const privateRoutes = [
  {
    path: DASHBOARD,
    element: <ScreenDashboard />,
  },
  {
    path: TICKETS,
    element: <ScreenTickets />,
  },
  {
    path: CURRENT_TASK,
    element: <ScreenTask />,
  },
];
