import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';


import css from './ContactsPage.module.css'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'

// ------

export default function App() {
    const err = useSelector(selectError)
    const load = useSelector(selectLoading)
    const logIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    useEffect(() => {
        if (logIn) {
            dispatch(fetchContacts())
                     const id = setTimeout(() => { toast(`Welcome back ${user.name}`, { duration: 3000, style: { backgroundColor: 'aquamarine' } }) }, 1000);
        return () => {clearTimeout(id)}
        }
    }, [dispatch, logIn, user])



    return (
        <div>
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
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm/>
            <SearchBox/>
            </div>
            {!err && load && <div>Loading...</div>}
            {logIn ? <ContactList></ContactList> : <p>Please log in</p>}
            
        </div>)
    
}