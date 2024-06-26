import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function RestrictedRoute({ component: Component, redirectTo = '/' }) {
    const logIn = useSelector(selectIsLoggedIn)
    return (
        <div>
            
            {logIn ? <Navigate to={redirectTo}></Navigate> : Component}
        </div>
    )
}