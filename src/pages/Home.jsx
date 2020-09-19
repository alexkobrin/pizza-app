import React from 'react';
import { Categories, SortPopUp, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopUp items={['популярности', 'цена', 'алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => <PizzaBlock key={item.id} {...item} />)}
          
        
      </div>
    </div>
  );
}

export default Home;
