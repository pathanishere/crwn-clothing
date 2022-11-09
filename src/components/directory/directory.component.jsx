import { DirectoryContainer } from "./directory.style";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
