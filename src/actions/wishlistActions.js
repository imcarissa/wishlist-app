export const fetchLists = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/wishlists')
        .then(response => response.json())
        .then(lists => dispatch({ type: 'FETCH_LISTS', payload: lists }))
    }
}