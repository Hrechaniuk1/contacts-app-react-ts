import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div>
            <h1 className={css.title}>This is home page</h1>
            <p className={css.description}>Some information about this app</p>
        </div>
    )
}