import * as React from 'react';

interface Props {
  currentStatus: string;
  statusName: string;
  statusValue: string;
  onSetStatus: (statusValue: string) => void;
}

const FilterBtn = ({
  onSetStatus,
  currentStatus,
  statusName,
  statusValue,
}: Props) => (
  <button
    onClick={() => onSetStatus(statusValue)}
    className={`btn ${currentStatus === statusValue ? 'border' : null}`}
  >
    {statusName}
  </button>
);
export default React.memo(FilterBtn);
