export const wishlistReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LISTS':
            return action.payload
        case 'ADD_LIST':
            return [...state, action.payload]
        case 'DELETE_LIST':
            return state.filter(wish => wish.id !== action.payload.id)
        default:
            return state
    }
}