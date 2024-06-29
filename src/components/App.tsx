import { FC, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../pages/ContactsPage/ContactsPage.types";
import PrivateRoute from './PrivatRoute/PrivatRoute'
import RestrictedRoute from './RestrictedRoute/RestrictedRoute'
import Layout from './Layout'
import {refreshUser} from '../redux/auth/operations'
import { selectIsRefreshing, selectIsLoggedIn } from '../redux/auth/selectors'
import { logout } from '../redux/auth/operations';
import { number } from "yup";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'))
const LoginForm = lazy(() => import('./LoginForm/LoginForm'))    



// ------

const App: FC = () => {
    const isRefresh = useAppSelector(selectIsRefreshing)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const delay = 1000000

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(refreshUser()) }, [dispatch])
    
    useEffect(() => {
        let id: ReturnType<typeof setTimeout>
        if (isLoggedIn) {
            id = setTimeout(() => dispatch(logout()), delay)
        }
        return () => clearTimeout(id)
    }, [dispatch, isLoggedIn])

    return isRefresh ? <p>Refreshing user</p> : <Layout>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/contacts' element={<PrivateRoute
                component={ContactsPage}
                redirectTo={'/login'}   
            >
            </PrivateRoute>}></Route>
            <Route path='/login' element={
                <RestrictedRoute
                redirectTo='/contacts'
                component={LoginForm}
                ></RestrictedRoute>
            }></Route>
            <Route path='/register' element={
                <RestrictedRoute
                redirectTo='/contacts'
                component={RegistrationForm}
                ></RestrictedRoute>
            }></Route>
        </Routes>
    </Layout>
}


export default App