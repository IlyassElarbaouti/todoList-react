/* eslint-disable default-param-last */
interface Prop {
  type: string;
  payload: number;
}

const reducer = (state: number = 0, action: Prop) => {
  switch (action.type) {
    case 'setNextId':
      return action.payload;

    case 'increase':
      return state + 1;

    default:
      return state;
  }
};

export default reducer;
