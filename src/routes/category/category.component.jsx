import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoryContainer } from "./category.style";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoryContainer>
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </CategoryContainer>
  );
};

export default Category;
