import React from 'react'
import withAuth from '@/app/auth/WithAuth';
const page = () => {
  return (
    <div>
      Client Category Page
    </div>
  )
}

export default withAuth(Page);
