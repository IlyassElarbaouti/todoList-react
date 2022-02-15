import * as React from 'react'

interface Props {
  onSetStatus: (status: string) => void
  currentStatus: string
  targetedStatus: string
}

const FilterBtn = ({ onSetStatus, currentStatus, targetedStatus }: Props) => {
    console.log('filter btns rerendered')
  return (
    <button
      onClick={() => onSetStatus(targetedStatus)}
      className={`btn ${currentStatus === targetedStatus ? 'border' : null}`}
    >
      {targetedStatus}
    </button>
  )
}
export default React.memo(FilterBtn)
