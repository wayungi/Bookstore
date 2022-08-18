/** @format */
import { useDispatch } from 'react-redux';
import { actCheckStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" onClick={dispatch(actCheckStatus)}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
