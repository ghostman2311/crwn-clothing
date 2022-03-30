import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollect = (collectionURIParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionURIParam]
  );
