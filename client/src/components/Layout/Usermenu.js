import React from 'react'
import { NavLink } from 'react-router-dom'
const Usermenu = () => {
  return (
    <>
        <div className="admin-center">
            <div className="list-group">
        <h4>User Dashboard</h4>
        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
            Profile
        </NavLink>
        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
           orders
        </NavLink>
       
        
        </div>

    </div>
    </>
  )
}

export default Usermenu