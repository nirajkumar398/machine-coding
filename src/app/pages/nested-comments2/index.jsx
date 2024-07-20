import NestedComments from "./components/NestedComments";
import data from "./data/comments.json";

const App = () => {
  return (
    <div>
      <h1>Nested Comments System</h1>
      <NestedComments data={data} />
    </div>
  );
};

export default App;
