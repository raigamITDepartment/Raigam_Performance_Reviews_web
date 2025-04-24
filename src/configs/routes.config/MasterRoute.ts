import { lazy } from 'react'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const MasterRoute: Routes = [


    {
        key: 'MasterMenu.Demarcation',
        path: '/Master-menu-Demarcation',
        component: lazy(() => import('@/views/MasterSettings/Demarcation/Demarcation')),
        authority: [],
    },
    {
        key: 'MasterMenu.DistributorMapping',
        path: '/Master-menu-DistributorMapping',
        component: lazy(() => import('@/views/MasterSettings/DistributorMapping/DistributorMapping')),
        authority: [],
    },
    {
        key: 'MasterMenu.collapse.FinalGeography',
        path:  '/Master-menu-FinalGeography',
        component: lazy(() => import('@/views/MasterSettings/FinalGeography/FinalGeography'),
        ),
        authority: [],
    },

]

export default MasterRoute