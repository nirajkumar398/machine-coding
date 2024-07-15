import { Link } from "react-router-dom";
import "./style.css";
import { routeConfig } from "../../Router";

const Home = () => {
  return (
    <div className="page__container">
      <h1>This is created for machine coding interview questions.</h1>
      <ul className="page__link">
        {routeConfig.map((route) => (
          <li key={route.id}>
            <Link key={route.id} to={route.url}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
