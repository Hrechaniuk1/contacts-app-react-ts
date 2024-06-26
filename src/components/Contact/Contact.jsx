import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

import css from './Contact.module.css'


import { updateContact } from '../../redux/contacts/operations'
import ModalChange from '../ModalChange/ModalChange'
import ModalDelete from '../ModalDelete/ModalDelete'


export default function Contact({ userName, userNumber, id }) {
    const [isOpen, setIsOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)


    const dispatch = useDispatch()
    // function deleteHandler() {
    //     dispatch(deleteContact(id))
        
    // }

    function updateHandler(data) {
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