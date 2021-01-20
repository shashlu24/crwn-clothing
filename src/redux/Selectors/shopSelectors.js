import { createSelector } from "reselect";

const selectShop = (state) => state.data;

export const selectShopItems = createSelector(
  [selectShop],
  (data) => data.collections
);
