
const initialState = {
   items: [],
   isLoaded: false
};


const pizzas = (state = initialState, action) => {

   switch (action.type) {
      case 'SET_PIZZAS':
         return {
            ...state,
            items: action.payload,
            isLoaded: true
         };
          
      case 'SET_LOADED':
         return {
            ...state,
            isLoaded: action.payload
         };
          
      default:
        return state
   }



   // if(action.type === 'SET_CATEGORY') {
   //     return  {
   //         ...state ,
   //         sortBy: action.payload
   //      }
  
};

export default pizzas;