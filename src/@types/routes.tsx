import { LayoutType } from './theme'
import type { LazyExoticComponent, ReactNode, JSX } from 'react'

export type PageHeaderProps = {
    title?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
    description?: string | ReactNode
    contained?: boolean
    extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
}

export interface Meta {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    pageBackgroundType?: 'default' | 'plain'
    header?: PageHeaderProps
    footer?: boolean
    layout?: LayoutType
}

export type Route = {
    key: string
    path: string
    component: LazyExoticComponent<(props: any) => JSX.Element> // Allow components with any props
    authority: string[]
    meta?: Meta
}

export type Routes = Route[]
