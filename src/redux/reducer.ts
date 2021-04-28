import { Product, RootState } from "./types";

const initialState = {
  products: [] as Product[],
  counter: 0
} as RootState;

const reducer = (state: RootState = initialState, action: any): RootState => {
  switch (action.type) {
    case "addToCart": {
      return {
        ...state,
        counter: action.counter
      };
    }
    case "addProduct": {
      return {
        ...state,
        products: [...state.products, action.product]
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
