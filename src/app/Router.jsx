import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import InfiniteScroll from "./pages/infinite-scroll";
import Home from "./pages/home";
import TicTacToe from "./pages/tic-tac-toe";
import NotoficationToast from "./pages/notificationToast";
import AutoSuggestion from "./pages/auto-suggestion/index2";
import NestedComments from "./pages/nested-comments";
import EmployeeDataBase from "./pages/emplyeeDatabase";
import CountdownTimer from "./pages/countdownTimer";
export const routeConfig = [
  {
    title: "Home Page",
    id: 0,
    url: "/",
    component: Home,
  },
  {
    title: "Pagination",
    id: 1,
    url: "/pagination",
    component: Pagination,
  },
  {
    id: 2,
    title: "Infinite Scrolling",
    url: "/infinite-scroll",
    component: InfiniteScroll,
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    url: "/tic-tac-toe",
    component: TicTacToe,
  },
  {
    id: 4,
    title: "Notification Toast",
    url: "/notification-toast",
    component: NotoficationToast,
  },
  {
    id: 5,
    title: "Auto Suggestion",
    url: "/auto-suggestion",
    component: AutoSuggestion,
  },
  {
    id: 5,
    title: "Nested Comments",
    url: "/nested-comments",
    component: NestedComments,
  },
  {
    id: 6,
    title: "Employee Database Management System",
    url: "/employee-database",
    component: EmployeeDataBase,
  },
  {
    id: 6,
    title: "Countdown Timer",
    url: "/count-down-timer",
    component: CountdownTimer,
  },
];

const Router = () => {
  return (
    <BrowserRouter basename="/machine-coding">
      <Routes>
        {routeConfig.map((route) => (
          <Route
            path={route.url}
            element={<route.component />}
            key={route.id}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
