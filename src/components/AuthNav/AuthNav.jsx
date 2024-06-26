import { Link } from "react-router-dom"

import css from './AuthNav.module.css'

export default function AuthNav() {

    return (
        <div className={css.container}>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Registration</Link>
        </div>
    )
}