export const wishlistReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LISTS':
            return action.payload
        case 'ADD_LIST':
            return [...state, action.payload]
        default:
            return state
    }
}