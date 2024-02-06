import React from 'react'
import withAuth from '@/app/auth/WithAuth';
const page = () => {
  return (
    <div>
      Client Booking Details Page
    </div>
  )
}

export default withAuth(Page);
