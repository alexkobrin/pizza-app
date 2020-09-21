import React from 'react';
import { Categories, SortPopUp, PizzaBlock } from '../components';
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../redux/actions/filters'

 const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
 const sortItem= [
  { name: 'популярности', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
]

function Home( ) {
  

  const dispatch = useDispatch();
  const items = useSelector(({pizzas , filter}) => pizzas.items);
  
  const onSelectCategoty = React.useCallback((index)=> {
    dispatch(setCategory(index));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
        onClickItem ={onSelectCategoty}
         items={categoryNames} />
        <SortPopUp
          items={sortItem}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
