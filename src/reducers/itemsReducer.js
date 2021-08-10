export const itemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ITEMS':
            return action.payload
        default:
            return state
    }
}
