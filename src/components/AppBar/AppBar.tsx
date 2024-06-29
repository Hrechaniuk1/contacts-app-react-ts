import { useAppSelector } from '../../pages/ContactsPage/ContactsPage.types'

import css from './AppBar.module.css'
import {selectIsLoggedIn } from '../../redux/auth/selectors'
import Navigation from '../Navigation/Navigation'
import AuthNav from "../AuthNav/AuthNav"
import UserMenu from "../UserMenu/UserMenu"
import { FC } from 'react'


const AppBar: FC = () => {
    const isLogged = useAppSelector(selectIsLoggedIn)


    return (
        <div className={css.container}>
            <Navigation></Navigation>
            {!isLogged ? <AuthNav></AuthNav> : <UserMenu></UserMenu>}
    </div>
)
}

export default AppBar