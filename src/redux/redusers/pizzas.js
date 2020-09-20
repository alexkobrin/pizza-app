 
 const initialState = {
   items: [],
   isLoaded: false
};


const pizzas = (state = initialState , action) => {
if(action.type === 'SET_PIZZAS') {
   return  {
       ...state ,
       items: action.payload,
       
    }
} 
// if(action.type === 'SET_CATEGORY') {
//     return  {
//         ...state ,
//         sortBy: action.payload
//      }
return state;
};

export default pizzas;