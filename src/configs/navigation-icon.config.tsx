import {
    PiHouseLineDuotone,
    PiArrowsInDuotone,
    PiBookOpenUserDuotone,
    PiBookBookmarkDuotone,
    PiAcornDuotone,
    PiBagSimpleDuotone,
    PiStackSimpleBold,
    PiUserSquareFill,
    PiShoppingBagOpenThin,
    PiReadCvLogoFill,
    PiAddressBookTabsThin,
    PiShoppingCartFill,
    PiReceiptXBold
} from 'react-icons/pi'
import type { JSX } from 'react'
import { report } from 'process'
import { Outlet } from 'react-router-dom'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <PiHouseLineDuotone />,
    singleMenu: <PiAcornDuotone />,
    collapseMenu: <PiArrowsInDuotone />,
    groupSingleMenu: <PiBookOpenUserDuotone />,
    groupCollapseMenu: <PiBookBookmarkDuotone />,
    dashboard:< PiStackSimpleBold/>,
    groupMenu: <PiBagSimpleDuotone />,
    usermodule: <PiUserSquareFill />,
    sales:<PiShoppingBagOpenThin/>,
    report:<PiReadCvLogoFill/>,
    HR:<PiAddressBookTabsThin/>,
    Outlet:<PiShoppingCartFill/>,
    research:<PiReceiptXBold/>
}

export default navigationIcon
