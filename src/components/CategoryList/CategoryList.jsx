import PropTypes from 'prop-types';
import { List, CategoryBtn } from './CategoryList.styled';

function CategoryList({ categories, onSearchByCategory }) {
  return (
    <List>
      {categories.map((category, idx) => {
        return (
          <li key={idx}>
            <CategoryBtn
              type="button"
              onClick={() => {
                onSearchByCategory(category.section);
              }}
            >
              {category.display_name}
            </CategoryBtn>
          </li>
        );
      })}
    </List>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSearchByCategory: PropTypes.func.isRequired,
};

export default CategoryList;

// section
