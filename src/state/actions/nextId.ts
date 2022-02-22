const setNextId = (id: number) => {
  return {
    type: 'setNextId',
    payload: id,
  };
};

const increaseNextId = () => {
  return {
    type: 'increaseNextId',
  };
};

export default { setNextId, increaseNextId };
