import React from 'react';
import { Categories, SortPopUp, PizzaBlock, LoadingPizza } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory ,setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItem = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цена', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);

 

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeItem={category} onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopUp activeSortType={sortBy.type} onClickSortType={onSelectSortBy}  items={sortItem} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzaBlock key={item.id} isLoaded={true} {...item} />)
          : Array(12).fill(0).map( (_, index) =>  <LoadingPizza key={index}  /> )}
      </div>
    </div>
  );
}

export default Home;
