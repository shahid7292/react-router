import React from 'react'
import {Route,Redirect} from 'react-router-dom'

function ProtectedRoute({admin,Component,...rest}) {
    return (
        <Route {...rest} render={(props)=>{
            if(admin) 
            {
                return <Component />
            }
            else{
                return <Redirect to={{pathname:"/"}} />
            }
        }}/>
    )
}

export default ProtectedRoute
