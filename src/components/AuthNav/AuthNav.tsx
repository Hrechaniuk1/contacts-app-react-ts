import { Link } from "react-router-dom"

import css from './AuthNav.module.css'
import { FC } from "react"

const AuthNav: FC = () => {

    return (
        <div className={css.container}>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Registration</Link>
        </div>
    )
}

export default AuthNav