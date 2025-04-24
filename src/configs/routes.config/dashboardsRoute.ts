import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardsRoute: Routes = [

  
    {
        key: 'dashboard.Home',
        path: `${DASHBOARDS_PREFIX_PATH}/Home`,
        component: lazy(() => import('@/views/dashboards/Home')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

  
]

export default dashboardsRoute
