import { useAppDispatch, useAppSelector } from '../../pages/ContactsPage/ContactsPage.types' 

import { selectUser } from '../../redux/auth/selectors'
import { logout } from "../../redux/auth/operations"
import css from './UserMenu.module.css'
import { FC } from 'react'

const UserMenu: FC = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    function clickHandler() {
        dispatch(logout())
    }
    return (
        <div className={css.container}>
            <p>Hello {user.name}, {user.email}</p>
            <button onClick={clickHandler} >Log Out</button>
        </div>
    )
}


export default UserMenu