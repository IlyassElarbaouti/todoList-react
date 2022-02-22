const setStatus = (status: string) => {
  return {
    type: 'setStatus',
    payload: status,
  };
};
export default { setStatus };
