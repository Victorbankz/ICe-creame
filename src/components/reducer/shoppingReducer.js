import { TYPES } from "../actions/shoppingActions";

 export const shoppingInitialState ={
   products: [],
   cart: [],
 };

 export function shoppingReducer(state, action) {
   switch (action.type) {
    
    case TYPES.READ_STATE: {
       return {
         ...state,
         products: action.payload.newProduct,
         cart: action.payload.newCartItem
       }
     }
     case TYPES.ADD_TO_CART: {
       let newItem = state.products.find(
         (product) => product.id === action.payload.itemData.id
       );
       let itemInCart = state.cart.find((item) => item.id === newItem.id);

       return itemInCart
         ? {
             ...state,
             cart: state.cart.map((item) =>
               item.id === newItem.id
                 ? { ...item, quantity: item.quantity + 1 }
                 : item
             ),
           }
         : {
             ...state,
             cart: [...state.cart, { ...action.payload.itemData, quantity: 1 }],
           };
     }
     case TYPES.REMOVE_ONE_PRODUCT: {
       let itemToDelete = state.cart.find((item) => item.id === action.payload);

       return itemToDelete.quantity > 1
         ? {
             ...state,
             cart: state.cart.map((item) =>
               item.id === action.payload
                 ? { ...item, quantity: item.quantity - 1 }
                 : item
             ),
           }
         : {
             ...state,
             cart: state.cart.filter((item) => item.id !== action.payload),
           };
     }
     case TYPES.REMOVE_ALL_PRODUCTS: {
       return {
         ...state,
         cart: state.cart.filter((item) => item.id !== action.payload),
       };
     }
     case TYPES.CLEAR_CART: {
       return shoppingInitialState;
     }
     default:
       return state;
   } 
 }