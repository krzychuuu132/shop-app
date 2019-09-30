import types from "./types";

const add = name => ({ type: types.ADD_ACTOR, name });
const reset = () => ({ type: types.DELETE_ACTOR });

export default {
  add,
  reset
};
