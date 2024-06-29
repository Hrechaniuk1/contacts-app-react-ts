import {Link } from "react-router-dom";

import css from './Navigation.module.css'
import { FC } from "react";

const Navigation: FC = () => {

    return (
        <div className={css.container}>
            <Link to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
    )
}

export default Navigation