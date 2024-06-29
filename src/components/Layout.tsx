import {FC, ReactNode, Suspense } from "react"

import AppBar from './AppBar/AppBar'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {


    return (
        <div>
            <AppBar></AppBar>
            <Suspense>{children}</Suspense>
        </div>
    )
}

export default Layout