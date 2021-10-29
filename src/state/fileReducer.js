export default function fileReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addProduct(state, action);
    case "SET_DISHES":
      return setDishes(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addProduct(state, action) {
  const { payload } = action;
  return [...state, payload];
}

function setDishes(action) {
  const { payload } = action;

  return payload;
}
