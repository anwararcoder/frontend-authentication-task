import React from 'react'

const EditModal = ({editModalRef}) => {
  return (
    <div className='fixed z-[55555] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[80vw] w-full max-h-[90vh] overflow-y-auto shadow-lg border-[1px] border-[#DDD] p-[30px] rounded-[8px]' ref={editModalRef}>
        EditModal
      
    </div>
  )
}

export default EditModal
