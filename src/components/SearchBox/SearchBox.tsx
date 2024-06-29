import { ChangeEvent, FC, useId } from "react";
import { useAppDispatch, useAppSelector } from "../../pages/ContactsPage/ContactsPage.types";

import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filter/slice';
import { selectFilter } from "../../redux/filter/selectors";

const SearchBox: FC = () => {
    const SearchId = useId()
    const dispatch = useAppDispatch()

    const value = useAppSelector(selectFilter)

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        dispatch(changeFilter(event.target.value))
    }
    
    return (
        <div>            
                <form className={css.search}>
                    <label htmlFor={SearchId}>Find contacts by name</label>
                    <input className={css.input} type='text' name='name' id={SearchId} onChange={changeHandler} value={value.name}></input>
                </form>

        </div>
    )
}

export default SearchBox