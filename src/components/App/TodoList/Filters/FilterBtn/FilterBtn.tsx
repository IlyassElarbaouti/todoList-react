import * as React from 'react'

interface Props {
  onSetStatus: (status: string) => void
  currentStatus: string
  targetedStatus: string
}

const FilterBtn = ({ onSetStatus, currentStatus, targetedStatus }: Props) => {
  return (
    <button
      onClick={() => onSetStatus(targetedStatus)}
      className={`btn ${currentStatus === targetedStatus ? 'border' : null}`}
    >
      {targetedStatus}
    </button>
  )
}
export default FilterBtn
