import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useAppDispatch } from "../../pages/ContactsPage/ContactsPage.types";
import { FC, useState } from "react";

import css from './Contact.module.css'


import { updateContact } from '../../redux/contacts/operations'
import ModalChange from '../ModalChange/ModalChange'
import ModalDelete from '../ModalDelete/ModalDelete'
import { ContactProps } from "./Contact.types";


const Contact: FC<ContactProps> = ({ userName, userNumber, id }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)


    const dispatch = useAppDispatch()
    // function deleteHandler() {
    //     dispatch(deleteContact(id))
        
    // }

    function updateHandler(data: {changeName: string, changeNumber: string}) {
        dispatch(updateContact({id, data: {name: data.changeName, number: data.changeNumber}}))
        setIsOpen(false)
    }

    return (
        <div className={css.container}>
            <ul>
                <li className={css.listItem}><IoMdContact size={20} />{userName}</li>
                <li className={css.listItem}><FaPhoneAlt size={20} />{userNumber}</li>
            </ul>
            <div className={css.btnContainer}>
                <button className={css.btn} onClick={() => setDeleteModalOpen(true)}>Delete</button>
                <button className={css.btn} onClick={() => setIsOpen(true)}>Change</button>
                <ModalChange isOpen={isOpen} onSubmit={updateHandler} name={userName} number={userNumber} closeModal={setIsOpen}></ModalChange>
                <ModalDelete isOpen={deleteModalOpen} closeModal={setDeleteModalOpen} onDeleteId={id} ></ModalDelete>
            </div>
        </div>
    )
}

export default Contact