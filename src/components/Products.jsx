import { useState } from "react";
import ProductList from "./ProductList";

const data = [
  {
    id: 1,
    title: "Iphone 12",
    price: 900,
  },
  {
    id: 2,
    title: "Ipad 10",
    price: 500,
  },
  {
    id: 3,
    title: "MacBookPro",
    price: 3000,
  },
  {
    id: 4,
    title: "Iphone 14",
    price: 1300,
  },
];

const Products = () => {
  const [products, setProducts] = useState(data);
  const [showProducts, setShowProducts] = useState(true);

  //fx to delete a product
  const handleClick = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => {
        return id !== product.id;
      });
    });
  };

  console.log(showProducts);

  return (
    <div className="p-2 m-0">
      {showProducts ? (
        <div className="p-2 m-0">
          <button onClick={() => setShowProducts(false)}>Hide Products</button>
        </div>
      ) : (
        <div className="p-2 m-0">
          <button onClick={() => setShowProducts(true)}>Show Products</button>
        </div>
      )}

      {showProducts && (
        <ProductList products={products} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Products;
