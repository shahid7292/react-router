import React,{useEffect} from 'react'
import {logout} from '../actions/index'
import {useDispatch} from 'react-redux'
function Admin() {
    const dispatch=useDispatch();  

    useEffect(() => {
        return () => {
            dispatch(logout())
        }
    })
    return (

        <div className="admin">
            <h1>
                Valuable information only admin can see
            </h1>
        </div>
    )
}

export default Admin
