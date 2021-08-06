import { combineReducers } from "redux";
import { wishlistReducer } from "./wishlistReducer";
import { itemsReducer } from "./itemsReducer";

export const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    items: itemsReducer
})