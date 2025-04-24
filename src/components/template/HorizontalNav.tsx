import HorizontalMenuContent from './HorizontalMenuContent'
import { useRouteKeyStore } from '@/Store/routeKeyStore'
import { useSessionUser } from '@/Store/authStore'
import appConfig from '@/configs/app.config'
import navigationConfig from '@/configs/navigation.config'

const HorizontalNav = ({
    translationSetup = appConfig.activeNavTranslation,
}: {
    translationSetup?: boolean
}) => {
    const currentRouteKey = useRouteKeyStore((state) => state.currentRouteKey)

    const userAuthority = useSessionUser((state) => state.user.authority)

    return (
        <HorizontalMenuContent
            navigationTree={navigationConfig}
            routeKey={currentRouteKey}
            userAuthority={userAuthority || []}
            translationSetup={translationSetup}
        />
    )
}

export default HorizontalNav
