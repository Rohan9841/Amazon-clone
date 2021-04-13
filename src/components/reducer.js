export const initialState = {
    basket: [],
    user: null
};


//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //find index of the item inside the basket which we want to delete
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                //chop one element starting at index from the new basket 
                newBasket.splice(index, 1);
            } else {
                console.log(`Can't delete the item with id ${action.id} as it's not in the
                basket`)
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;