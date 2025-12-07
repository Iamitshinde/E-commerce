import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import AdminMenu from '../../components/Layout/AdminMenu.js'
import { useAuth } from '../../Context/auth.js'
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className ="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            {/* Admin Menu will go here */}
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            {/* Admin Info will go here */}
            <div className="card w-75 p-3">
              <h3>Admin Information</h3>
              <hr />
              <h6>Name : {auth?.user?.name}</h6>
              <h6>Email : {auth?.user?.email}</h6>
              <h6>Contact No : {auth?.user?.phone}</h6>
              <h6>Address : {auth?.user?.address}</h6>
              <h6>Role : {auth?.user?.role === 1 ? "Admin" : "User"}</h6>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard