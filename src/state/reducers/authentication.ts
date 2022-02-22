/* eslint-disable default-param-last */
interface Prop {
  type: string;
}

const reducer = (state: boolean = false, action: Prop) => {
  switch (action.type) {
    case 'toggleAuth':
      return !state;

    default:
      return state;
  }
};

export default reducer;
