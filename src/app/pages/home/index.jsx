import "./style.css";

const configLinks = [
  {
    title: "Pagination",
    id: 1,
    url: "/machine-coding/pagination",
  },
  {
    id: 2,
    title: "Infinite Scrolling",
    url: "/machine-coding/infinite-scroll",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    url: "/machine-coding/tic-tac-toe",
  },
];

const Home = () => {
  return (
    <div className="page__container">
      <h1>This is created for machine coding interview questions.</h1>
      <div className="page__link">
        {configLinks.map((configLink) => (
          <a key={configLink.id} href={configLink.url}>
            <li>{configLink.title}</li>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
