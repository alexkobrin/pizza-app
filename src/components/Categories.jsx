import React from 'react';

// class Categories extends Component {
//   state = {
//     activeItem: '',
//   };

//   onSelectItem = (index) => {
//     this.setState({ activeItem: index });

//   };
//   render() {
//     const { items, onClickItem } = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               key={index}
//               onClick={() => this.onSelectItem(index)}>
//               {' '}
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);


  const onSelectItem = (index) => {
    setActiveItem(index)
  };

  

  return (
    <div className="categories">
      <ul>
        <li  className={activeItem === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>Все</li>
        {items && items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            key={index}
            onClick={() => onSelectItem(index)}>
            {' '}
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
