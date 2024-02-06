import React from 'react'
import withAuth from '@/app/auth/WithAuth';
const Page = () => {
  return (
    <div>
      Client Booking Details Page
    </div>
  )
}

export default withAuth(Page);
