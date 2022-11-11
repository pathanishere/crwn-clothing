import { useNavigate } from "react-router-dom";

import {
  CategoryContainer,
  BackgroundImage,
  CategoryBody,
} from "./category-item.style";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </CategoryContainer>
  );
};

export default CategoryItem;
