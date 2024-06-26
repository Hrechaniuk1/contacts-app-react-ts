import { useSelector } from "react-redux"

import css from './AppBar.module.css'
import {selectIsLoggedIn } from '../../redux/auth/selectors'
import Navigation from '../Navigation/Navigation'
import AuthNav from "../AuthNav/AuthNav"
import UserMenu from "../UserMenu/UserMenu"


export default function AppBar() {
    const isLogged = useSelector(selectIsLoggedIn)


    return (
        <div className={css.container}>
            <Navigation></Navigation>
            {!isLogged ? <AuthNav></AuthNav> : <UserMenu></UserMenu>}
    </div>
)
}