/* eslint-disable default-param-last */
interface Prop {
  type: string;
  payload: string;
}

const reducer = (state: String = 'all', action: Prop) => {
  switch (action.type) {
    case 'setStatus':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
