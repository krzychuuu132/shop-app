export default function pageReducer(state = [], action) {
  switch (action.type) {
    case "ACTIVE_MENU":
      return [...state, { ...action.active }];
    default:
      return state;
  }
}
