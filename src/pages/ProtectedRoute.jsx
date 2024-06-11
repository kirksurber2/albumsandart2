import {Navigate, Outlet, useOutletContext} from 'react-router-dom'

import {useContext} from 'react'
import {UserContext} from '../context/UserProvider'



export default function ProtectedRoute({children})  {

    const UserProvider = useContext(UserContext)
    if(!token) {
        return <Navigate to='/login' replace/>
    }
    return <Outlet context={{UserProvider}}/>
}

export function userLoader () {
    const {user, token} = useContext(UserContext)
    return {user, token}
}