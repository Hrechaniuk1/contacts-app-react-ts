import { useAppSelector } from "../../pages/ContactsPage/ContactsPage.types"
import { nanoid } from "nanoid"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import {selectVisibleContacts} from '../../redux/contacts/selectors'
import { FC } from "react"


const ContactList: FC = () => {

    const items = useAppSelector(selectVisibleContacts)




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

export default ContactList