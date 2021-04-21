import React from 'react'
import {logout} from '../actions/index'
import {useDispatch} from 'react-redux'
function Admin() {
    const dispatch=useDispatch();  

    return (

        <div className="admin">
            
            <h1>
                Valuable information only admin can see
            </h1>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    )   
}

export default Admin
