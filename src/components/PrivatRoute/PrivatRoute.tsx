import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../pages/ContactsPage/ContactsPage.types'; 
import { PrivateRouteProps } from './PrivateRoute.types';

import {selectIsLoggedIn} from '../../redux/auth/selectors'
import { FC } from 'react';

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/' }) => {

    const logIn = useAppSelector(selectIsLoggedIn)

    return (
        <div>
            {logIn ? <Component/> : <Navigate to={redirectTo}></Navigate>}
        </div>
    )
}

export default PrivateRoute