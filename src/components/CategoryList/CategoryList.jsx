import PropTypes from 'prop-types';
import { List, CategoryBtn, ItemOther } from './CategoryList.styled';
import { nanoid } from 'nanoid';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

function CategoryList({ categories, onSearchByCategory }) {
  const [isShowModal, setIsShowModal] = useState(false);
  // const [showedCategories, setShowedCategories] = useState( () => categories. );
  // const [hiddenCategories, setHiddenCategories] = useState([]);

  const showedCategories = [...categories].slice(0, 8);
  const hiddenCategories = [...categories].slice(8);

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  return (
    <List>
      {showedCategories.map((category, idx) => {
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
      <ItemOther key={nanoid()}>
        {!isShowModal ? (
          <CategoryBtn type="button" onClick={() => toggleModal()}>
            Other
            <FiChevronDown size="1.5em" />
          </CategoryBtn>
        ) : (
          <>
            <CategoryBtn type="button" onClick={toggleModal}>
              Close
              <FiChevronUp size="1.5em" />
            </CategoryBtn>
            <Modal
              categories={hiddenCategories}
              onClose={toggleModal}
              onSearchByCategory={onSearchByCategory}
            />
          </>
        )}
      </ItemOther>
    </List>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSearchByCategory: PropTypes.func.isRequired,
};

export default CategoryList;

// section
