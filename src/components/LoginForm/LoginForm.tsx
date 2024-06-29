import { Form, Formik, Field, ErrorMessage, FormikHelpers } from 'formik'
import { useAppDispatch } from '../../pages/ContactsPage/ContactsPage.types';
import { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import css from './LoginForm.module.css'
import { login } from '../../redux/auth/operations'
import { loginInitialType } from './LoginForm.types';
import { FC } from 'react';

const LogInMenu: FC = () => {
    const dispatch = useAppDispatch()

    const initialValues: loginInitialType = {
        email: '',
        password: '',
    }
    const validationSchema: Yup.ObjectSchema<loginInitialType> = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Enter the email please'),
        password: Yup.string().min(7, 'at least 7 characters').max(15, 'No more than 15 characters').required('enter your password'),
      })
    
    function submitHandler(values: loginInitialType, actions: FormikHelpers<loginInitialType>) {
        dispatch(login({ email: values.email, password: values.password }))
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
            <p className={css.description}>Please login with your enail and password</p>
            <Formik<loginInitialType>
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={validationSchema}
            >
                <Form className={css.container}>
                    <label>Email:
                        <Field type='email' name='email' required></Field>
                    </label>
                    <ErrorMessage className={css.error} name='email' component='span'></ErrorMessage>
                    <label>Password:
                        <Field type='password' name='password' required></Field>
                    </label>
                    <ErrorMessage className={css.error} name='password' component='span'></ErrorMessage>
                    <button type='submit' >Log In</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LogInMenu