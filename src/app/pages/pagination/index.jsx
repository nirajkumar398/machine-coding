// import "./style.css";
// import { useEffect, useState } from "react";

// const fetchInitialProducts = async (callback) => {
//   try {
//     const res = await fetch("https://dummyjson.com/products?limit=100");
//     const data = await res.json();
//     console.log("data is : ", data);
//     callback(data);
//   } catch (error) {
//     console.log("error is: ", error);
//     callback(null);
//   }
// };

// function Pagination() {
//   const [productsData, setProductsData] = useState({});
//   const [page, setPage] = useState(1);
//   const { products = [], total, limit } = productsData || {};

//   useEffect(() => {
//     fetchInitialProducts(setProductsData);
//   }, []);

//   const onPageSelectHandler = (selectedPage) => {
//     if (
//       selectedPage >= 1 &&
//       selectedPage <= products.length / 10 &&
//       selectedPage != page
//     ) {
//       setPage(selectedPage);
//     }
//   };
//   return (
//     <div className="container">
//       <h1>Pagination</h1>
//       {products.length > 0 && (
//         <div className="products">
//           {products.slice((page - 1) * 10, page * 10).map((product) => (
//             <span key={product.id} className="products__single">
//               <img src={product.thumbnail} />
//               <span>{product.title}</span>
//             </span>
//           ))}
//         </div>
//       )}
//       {products.length > 0 && (
//         <div className="pagination">
//           <span
//             onClick={() => onPageSelectHandler(page - 1)}
//             className={page <= 1 ? "disable__button" : ""}
//           >
//             ⬅️
//           </span>
//           {[...Array(10)].map((_, index) => (
//             <span
//               onClick={() => onPageSelectHandler(index + 1)}
//               className={page == index + 1 ? "pagination__seleced" : ""}
//             >
//               {index + 1}
//             </span>
//           ))}

//           <span
//             className={page >= products.length / 10 ? "disable__button" : ""}
//             onClick={() => onPageSelectHandler(page + 1)}
//           >
//             ➡️
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Pagination;

import "./style.css";
import { useEffect, useState } from "react";

const LIMIT = 12;
const fetchInitialProducts = async (page, callback) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`
    );
    const data = await res.json();
    console.log("data is : ", data);
    callback(data);
  } catch (error) {
    console.log("error is: ", error);
    callback(null);
  }
};

function Pagination() {
  const [productsData, setProductsData] = useState({});
  const [page, setPage] = useState(1);
  const { products = [], total, limit } = productsData || {};
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    fetchInitialProducts(page, setProductsData);
  }, [page]);

  const onPageSelectHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage != page
    ) {
      setPage(selectedPage);
    }
  };

  console.log("pagepage", page);
  console.log("totalpages", totalPages);
  return (
    <div className="container">
      <h1>Level Up Your Skills: Pagination Practice for Coding Interviews</h1>
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => (
            <span key={product.id} className="products__single">
              <img src={product.thumbnail} />
              <span>{product.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => onPageSelectHandler(page - 1)}
            className={page <= 1 ? "disable__button" : ""}
          >
            ⬅️
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              onClick={() => onPageSelectHandler(index + 1)}
              className={page == index + 1 ? "pagination__seleced" : ""}
              key={index}
            >
              {index + 1}
            </span>
          ))}

          <span
            className={page >= totalPages ? "disable__button" : ""}
            onClick={() => onPageSelectHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;