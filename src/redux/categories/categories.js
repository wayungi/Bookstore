/** @format */

const CHECK_STATUS = 'check_status';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const actCheckStatus = () => {
  const action = { type: CHECK_STATUS };
  return action;
};

export default reducer;
module.exports = {
  actCheckStatus,
};
