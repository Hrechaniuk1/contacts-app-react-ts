import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../pages/ContactsPage/ContactsPage.types';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FC } from 'react';
import { RestrictedRouteType } from './RestrictedRoute.types';

const RestrictedRoute: FC<RestrictedRouteType> = ({ component: Component, redirectTo = '/' }) => {
    const logIn = useAppSelector(selectIsLoggedIn)
    return (
        <div>
            
            {logIn ? <Navigate to={redirectTo}></Navigate> : <Component/>}
        </div>
    )
}

export default RestrictedRoute