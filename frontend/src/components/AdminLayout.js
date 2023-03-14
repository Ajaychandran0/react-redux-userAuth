import React from 'react'
import { Helmet } from 'react-helmet'
import AdminHeader from './AdminHeader'

const AdminLayout = ({title,children}) => {
  return (
    <div>
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <AdminHeader/>
            <div>
                {children}
            </div>
        </>
    </div>
  )
}

export default AdminLayout
