import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";
import ProductCard from "../product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="prodcuts-cotainer">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
