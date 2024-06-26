import {Link } from "react-router-dom";

import css from './Navigation.module.css'

export default function Navigation() {

    return (
        <div className={css.container}>
            <Link to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
    )
}