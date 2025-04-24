import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import Masternavigationconfig from './Master.navigation.config'

import dashboardsNavigationConfig from './dashboards.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    // {
    //     key: 'Dashboard',
    //     path: '/home',
    //     title: 'Dashboard',
    //     translateKey: 'nav.home',
    //     icon: 'groupCollapseMenu',
    //     type: NAV_ITEM_TYPE_ITEM,
    //     authority: [],
    //     subMenu: [],
    // },
    /** Example purpose only, please remove */
   
   ...dashboardsNavigationConfig,
   ...Masternavigationconfig,
   
   




    





     
]

export default navigationConfig
