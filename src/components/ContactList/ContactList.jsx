import { useSelector } from "react-redux"
import { nanoid } from "nanoid"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import {selectVisibleContacts} from '../../redux/contacts/selectors'


export default function ContactList() {

    const items = useSelector(selectVisibleContacts)




    return (
        <ul className={css.list}>
            {items.map(elem => {
                return <li className={css.listItem} key={nanoid()}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id}></Contact>
                </li>
                
            })}
        </ul>
    )
}