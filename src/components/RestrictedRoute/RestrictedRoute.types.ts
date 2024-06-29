import { ComponentType, ElementType, FC } from "react"

export type RestrictedRouteType = {
    component: ElementType,
    redirectTo: string
}