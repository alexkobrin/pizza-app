import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeItem, items, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onClickItem()}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={index}
              onClick={() => onClickItem(index)}>
              {' '}
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeItem: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// When some property are missing , we can set default props
Categories.defaultProps = { activeItem: null, items: {} };

export default Categories;
