import Modal, { Styles } from 'react-modal';
import { useAppDispatch } from '../../pages/ContactsPage/ContactsPage.types';

import css from './ModalDelete.module.css'
import { deleteContact } from '../../redux/contacts/operations'
import { FC } from 'react';
import { ModalDeleteProps } from './ModalDelete.types';


const customStyles: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
    width: '500px',
      height: '300px',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderColor: 'transparent',
  },
};


Modal.setAppElement('#root');


const ModalChange: FC<ModalDeleteProps> = ({ isOpen, closeModal, onDeleteId }) => {
    const dispatch = useAppDispatch()

    function deleteHandler() {
        dispatch(deleteContact(onDeleteId))
    }

     return (

            <Modal
             style={customStyles}
             isOpen={isOpen}
            //  onRequestClose={onRequestClose}
            >
             <div className={css.container}>
                 <p>Are u shure u wath to delete the contact?</p>
             <button onClick={deleteHandler}>Yes</button>
             <button onClick={() => closeModal(false) }>No</button>
             </div>
            </Modal>

    )
}

export default ModalChange