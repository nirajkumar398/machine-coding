import "./style.css";
import { useEffect, useState } from "react";

const LIMIT = 12;
const fetchInitialProducts = async (page) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`
    );
    const data = await res.json();
    console.log("data is: ", data);
    return data;
  } catch (error) {
    console.log("error is: ", error);
    return { products: [], total: 0, limit: LIMIT };
  }
};

function InfiniteScroll() {
  const [productsData, setProductsData] = useState({
    products: [],
    total: 0,
    limit: LIMIT,
  });
  const [page, setPage] = useState(1);
  const { products, total, limit } = productsData;
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    const onInfiniteScrollHandler = () => {
      console.log("scrollHeight: ", document.documentElement.scrollHeight);
      console.log("scrollTop: ", document.documentElement.scrollTop);
      console.log("inner Height: ", window.innerHeight);
      console.log("page: ", page);
      console.log("total pages: ", totalPages);
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >
          document.documentElement.scrollHeight &&
        page < totalPages
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", onInfiniteScrollHandler);
    return () => window.removeEventListener("scroll", onInfiniteScrollHandler);
  }, [page, totalPages]);

  useEffect(() => {
    const fetchProductsData = async (page) => {
      const data = await fetchInitialProducts(page);
      setProductsData((prevData) => ({
        ...data,
        products: [...prevData.products, ...data.products]
      }));
    };
    fetchProductsData(page);
  }, [page]);

  console.log("productsData: ", productsData);

  return (
    <div className="container">
      <h1>Level Up Your Skills: Infinite Scrolling Practice for Coding Interviews</h1>
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => (
            <span key={product.id} className="products__single">
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default InfiniteScroll;
