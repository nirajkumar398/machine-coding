import { Link } from "react-router-dom";
import "./style.css";
import { routeConfig } from "../../Router";

const Home = () => {
  return (
    <div className="page__container">
      <h1>This is created for machine coding interview questions.</h1>
      <ul className="page__link">
        {routeConfig
          .filter((e) => e.id !== 0)
          .map((route, index) => (
            <Link key={route.id} to={route.url}>
              <span className="page__link__item index">{`${index + 1}. `}</span>
              <span className="page__link__item">{route.title}</span>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Home;
