import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import InfiniteScroll from "./pages/infinite-scroll";
import Home from "./pages/home";
import TicTacToe from "./pages/tic-tac-toe";
import NotoficationToast from "./pages/notificationToast";
import AutoSuggestion from "./pages/auto-suggestion/index2";
import NestedComments from "./pages/nested-comments";
import EmployeeDataBase from "./pages/emplyeeDatabase";
import CountdownTimer from "./pages/countdown-timer";
import EMICalculator from "./pages/emi-calculator";
import Calculator from "./pages/calculator";
import ToDoList from './pages/todo-list'
// import UseState from "./pages/all-hooks/UseState";
import Virtualization from "./pages/virtulalization";
import Trello from "./pages/trello";
import Whiteboard from "./pages/white-board";

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
    id: 6,
    title: "Nested Comments",
    url: "/nested-comments",
    component: NestedComments,
  },
  {
    id: 7,
    title: "Employee Database Management System",
    url: "/employee-database",
    component: EmployeeDataBase,
  },
  {
    id: 8,
    title: "Countdown Timer",
    url: "/count-down-timer",
    component: CountdownTimer,
  },
  {
    id: 9,
    title: "EMI Calculator",
    url: "/emi-calculator",
    component: EMICalculator,
  },
  {
    id: 10,
    title: "Calculator",
    url: "/calculator",
    component: Calculator,
  },
  {
    id: 11,
    title: "Todo - List",
    url: "/todo-list",
    component: ToDoList,
  },
  // {
  //   id: 12,
  //   title: "All Hooks",
  //   url: "/all-hooks",
  //   component: UseState,
  // },
  {
    id: 13,
    title: "Virtualization",
    url: "/virtualization",
    component: Virtualization,
  },
  {
    id: 14,
    title: "Trello Board",
    url: "/trello",
    component: Trello,
  },
  {
    id: 15,
    title: "White Board",
    url: "/white-board",
    component: Whiteboard,
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
