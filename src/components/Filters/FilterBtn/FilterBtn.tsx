import * as React from 'react'

interface Props {
  onSetStatus: (status: string) => void
  currentStatus: string
  statusName: string
  statusValue: string
}

const FilterBtn = ({
  onSetStatus,
  currentStatus,
  statusName,
  statusValue,
}: Props) => {
  return (
    <button
      onClick={() => onSetStatus(statusValue)}
      className={`btn ${currentStatus === statusValue ? 'border' : null}`}
    >
      {statusName}
    </button>
  )
}
export default React.memo(FilterBtn)
