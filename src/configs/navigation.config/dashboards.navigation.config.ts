import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const dashboardsNavigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '',
        title: 'Dashboard',
        translateKey: 'nav.dashboard.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [

            {
                key: 'dashboard.Home',
                path: `${DASHBOARDS_PREFIX_PATH}/Home`,
                title: 'Result',
                translateKey: 'nav.dashboard.Home',
                icon: 'dashboardEcommerce',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            
        ],
    },
]

export default dashboardsNavigationConfig
