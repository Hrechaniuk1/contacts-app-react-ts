import { Form, Formik, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import {register} from '../../redux/auth/operations'

import css from './RegistrationForm.module.css'

export default function RegisterMenu() {
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordRepeat: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, '1 letter? For real?').max(15, 'Name is too long').required('Enter the name please'),
        email: Yup.string().email('Enter a valid email').required('Enter the email please'),
        password: Yup.string().min(7, 'at least 7 characters').max(15, 'No more than 15 characters').required('enter your password'),
        passwordRepeat: Yup.string().oneOf([Yup.ref('password'), null], 'There is a difference between password').required('There is a difference between password')
    })
    
    function submitHandler(values, actions) {
        const { passwordRepeat, ...data } = values
        console.log(values)
            dispatch(register(data))
            actions.resetForm()
    
    }

    return (
        <div className={css.component}>
            <Toaster
            position="top-right"
            gutter={8}
            toastOptions={{
            // Define default options
            className: '',
            duration: 1500,
            style: {
             background: '#363636',
             color: '#fff',
                }
            }}
            />
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
                    <label>Name:
                        <Field type='text' name='name'></Field>
                    </label>
                    <ErrorMessage className={css.error} name='name' component='span'></ErrorMessage>
                    <label>Email:
                        <Field type='email' name='email'></Field>
                    </label>
                    <ErrorMessage className={css.error} name='email' component='span'></ErrorMessage>
                    <label>Password:
                        <Field type='password' name='password'></Field>
                    </label>
                    <ErrorMessage className={css.error} name='password' component='span'></ErrorMessage>
                    <label>Repeat your password:
                        <Field type='password' name='passwordRepeat'></Field>
                    </label>
                    <ErrorMessage className={css.error} name='passwordRepeat' component='span'></ErrorMessage>
                    <button type='submit' >Register</button>
                </Form>
            </Formik>
        </div>
    )
}