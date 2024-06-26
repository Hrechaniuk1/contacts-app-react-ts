import {Suspense } from "react"

import AppBar from '../components/AppBar/AppBar'

export default function Layout({children}) {


    return (
        <div>
            <AppBar></AppBar>
            <Suspense>{children}</Suspense>
        </div>
    )
}