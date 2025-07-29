import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Recipe from "@/models/RecipeProps";

const STORAGE_KEY = "recipefavorites";

const getInitialState = (): Recipe[] => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
    }
  }
  return [];
};

const recipeSlice = createSlice({
  name: STORAGE_KEY,
  initialState: getInitialState(),
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      const item = action.payload;
      const exists = state.some(({ id }) => id === item.id);
      if (!exists) {
        state.push(item);
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
      }
    },
    removeRecipe(state, action: PayloadAction<number>) {
      const recipeId = action.payload;
      const filtered = state.filter(({ id }) => id !== recipeId);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      }
      return filtered;
    },
  },
});

export default recipeSlice;
export const recipeStoreActions = recipeSlice.actions;
