import { useSessionUser, useToken } from '../../Store/authStore'
import type { AxiosError } from 'axios'

const unauthorizedCode = [401, 419, 440]

const AxiosResponseIntrceptorErrorCallback = (error: AxiosError) => {
    const { response } = error
    const { setToken } = useToken()

    if (response && unauthorizedCode.includes(response.status)) {
        setToken('')
        useSessionUser.getState().setUser({})
        useSessionUser.getState().setSessionSignedIn(false)
    }
}

export default AxiosResponseIntrceptorErrorCallback
