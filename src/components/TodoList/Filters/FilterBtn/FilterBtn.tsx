import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import statusActions from '../../../../state/actions/status';
import RootState from '../../../../types/RootState';

interface Props {
  statusName: string;
  statusValue: string;
}

const FilterBtn = ({ statusName, statusValue }: Props) => {
  const currentStatus = useSelector((state: RootState) => state.currentStatus);
  const dispatch = useDispatch();

  const handleEditStatus = useCallback((newStatus: string) => {
    dispatch(statusActions.setStatus(newStatus));
  }, []);

  return (
    <button
      onClick={() => handleEditStatus(statusValue)}
      className={`btn ${currentStatus === statusValue ? 'border' : null}`}
    >
      {statusName}
    </button>
  );
};

export default React.memo(FilterBtn);
