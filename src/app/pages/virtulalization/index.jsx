import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import "./style.css";
export const genrateItem = (size) => Array(size).fill(null);
const Virtualization = () => {
  const [items, setItems] = useState([]);

  const loadMoreItems = () => {
    setItems(genrateItem(1000));
  };

  const Row = ({ index, style }) => {
    return (
      <span style={style} key={index}>
        {index}
      </span>
    );
  };
  return (
    <div className="virtualization-container">
      <h1>React Virtualization</h1>
      <button onClick={loadMoreItems}>Load More Items</button>
      {/* <div className="virtualization-list">
        {items.map((_, index) => (
          <span className="virtualization-item" key={index}>
            {index}
          </span>
        ))}
      </div> */}

      {/* <div className="virtualization-list"> */}
      <List height={300} itemCount={items.length} itemSize={40} width={300}>
        {Row}
      </List>
      {/* </div> */}
    </div>
  );
};

export default Virtualization;
