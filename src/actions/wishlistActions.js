const endpoint = 'http://localhost:3000/api/v1/wishlists'

export const fetchLists = () => {
    return (dispatch) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(lists => dispatch({ type: 'FETCH_LISTS', payload: lists }))
    }
}

export const addList = list => { 
    return (dispatch) => {
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(list),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(list => dispatch({ type: 'ADD_LIST', payload: list }))
    }
}