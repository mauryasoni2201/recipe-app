import {configureStore} from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice";

const store = configureStore({
    reducer:{
        favoriteRecipe: recipeSlice.reducer
    }
});

export default store;