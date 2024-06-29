import Modal, { Styles } from 'react-modal';
import css from './ModalChange.module.css'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { FC } from 'react';
import { ChangeInitialValuesType, ModalChangeProps } from './ModalChange.types';
import { initialContactsType } from '../../redux/contacts/slice';


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
      height: '350px',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderColor: 'transparent',
  },
};


Modal.setAppElement('#root');


const ModalChange: FC<ModalChangeProps> = ({ isOpen, onSubmit, name, number, closeModal }) => {
    const initialValues: ChangeInitialValuesType = {
        changeName: name,
        changeNumber: number,
    }

    function submitHandler(values: ChangeInitialValuesType, actions: FormikHelpers<ChangeInitialValuesType>) {
        onSubmit(values)
        actions.resetForm()
        }
     return (

            <Modal
             style={customStyles}
             isOpen={isOpen}
            //  onRequestClose={onRequestClose}
            >
             <Formik<ChangeInitialValuesType> initialValues={initialValues} onSubmit={submitHandler}> 
                 <Form className={css.form} >
                     <label >Name
                         <Field type='text' name='changeName' ></Field>
                     </label>
                     <label >Number
                         <Field type='tel' name='changeNumber' ></Field>
                     </label>
                     <button type='submit'>Update</button>
                     <button onClick={() => closeModal(false)}>Cancel</button>
                 </Form>
                 
                </Formik>
            </Modal>

    )
}

export default ModalChange