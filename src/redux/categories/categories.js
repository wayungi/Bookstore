/** @format */

const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const categoryReducer = (state = [], action) => {
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

export default categoryReducer;
export { actCheckStatus };
