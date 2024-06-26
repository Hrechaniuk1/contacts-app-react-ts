import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {selectIsLoggedIn} from '../../redux/auth/selectors'

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {

    const logIn = useSelector(selectIsLoggedIn)

    return (
        <div>
            {logIn ? Component : <Navigate to={redirectTo}></Navigate>}
        </div>
    )
}