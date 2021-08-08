TREE

index
     -- App
            -- Router
                    -- Home
                    -- Header
                    -- Footer
                    -- About
                    -- WishlistContainer
                            -- WishlistForm




 export const fetchLists = () => {
                                   return (dispatch) => {
                                                          fetch(endpoint)
                                                          .then(response => response.json())
                                                          .then(wishlists => dispatch({ type: 'FETCH_LISTS', payload: wishlists }))
    }
} 
                                                                                         case 'FETCH_LISTS':
                                                                                                             return action.payload