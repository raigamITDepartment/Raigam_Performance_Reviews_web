import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const Masternavigationconfig: NavigationTree[] = [
  
    {
        key: 'Master Settings',
        path: '',
        title: 'Master Settings',
        translateKey: 'nav.MasterMenu.MasterMenu',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'Demarcation',
                path: '/Master-menu-Demarcation',
                title: 'Demarcation',
                translateKey: 'nav.MasterMenu.Demarcation',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'Distributor Mapping',
                path: '/Master-menu-DistributorMapping',
                title: 'Distributor Mapping',
                translateKey: 'nav.MasterMenu.DistributorMapping',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'Final Geography Mapping',
                path: '/Master-menu-FinalGeography',
                title: 'Final Geography Mapping',
                translateKey: 'nav.MasterMenu.FinalGeography',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]
export default Masternavigationconfig