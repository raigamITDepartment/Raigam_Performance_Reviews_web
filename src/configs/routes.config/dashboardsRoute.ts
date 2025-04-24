import { lazy } from 'react'
import { FINAL_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardsRoute: Routes = [

  
    {
        key: 'final.Result',
        path: `${FINAL_PREFIX_PATH}/Result`,
        component: lazy(() => import('@/views/Final/Result')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

  
]

export default dashboardsRoute
