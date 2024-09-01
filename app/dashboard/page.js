import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='text-center'>
      <h2 className='text-[40px] font-bold text-[#666] mb-[30px]'>Welcome</h2>
      <Link href="/dashboard/employees/profile" className='inline-block text-[25px] font-bold text-[#EE232F] hover:text-[#666]'>Go to Profile Page</Link>
    </div>
  )
}

export default DashboardPage