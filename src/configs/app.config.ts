export type AppConfig = {
    apiPrefix: string
   authenticatedEntryPath: string
   unAuthenticatedEntryPath: string
    locale: string
    accessTokenPersistStrategy: 'localStorage' | 'sessionStorage' | 'cookies'
    enableMock: boolean
    activeNavTranslation: boolean
}
export const DASHBOARDS_PREFIX_PATH = '/dashboards'

const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: `${DASHBOARDS_PREFIX_PATH}/Home`,
     unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
    activeNavTranslation: false,
}

export default appConfig
