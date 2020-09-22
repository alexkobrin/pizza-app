import React from 'react';
import PropTypes from 'prop-types';




const SortPopUp = React.memo(function SortPopUp({ items, activeSortType, onClickSortType }) {
  const [visiblePopUp, setVisiblePopUp] = React.useState(false);
 
  const sortRef = React.useRef();
  const activeLabel = items.find(obj => obj.type === activeSortType).name;

  React.useEffect(() => {
    document.body.addEventListener('click', handlelOutSideClick);
  }, []);

  const handlelOutSideClick = (event) => {
    if (event.target !== sortRef.current) {
      setTimeout(() => {
        setVisiblePopUp(false);
      }, 500);
    }
  };

  const toggleVisiblePopUp = () => {
    setVisiblePopUp(!visiblePopUp);
  };

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopUp(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopUp ? 'rotate' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span ref={sortRef} onClick={toggleVisiblePopUp}>
          {activeLabel}
        </span>
      </div>
      {visiblePopUp && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectItem(obj)}
                  className={activeSortType === obj.type ? 'active' : ''}
                  key={obj.type}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopUp.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
   
};
 
SortPopUp.defaultProps = {
  items: []
}
export default SortPopUp;
