import Logo from '@/components/template/Logo'
import Alert from '@/components/ui/Alert'
import SignUpForm from './components/SignUpForm'
import ActionLink from '@/components/shared/ActionLink'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { useThemeStore } from '@/Store/themeStore'
import UserTable from './components/UserTable'

type SignUpProps = {
    disableSubmit?: boolean
    signInUrl?: string
}

export const SignUpBase = ({
    signInUrl = '/sign-in',
    disableSubmit,
}: SignUpProps) => {
    const [message, setMessage] = useTimeOutMessage()

    const mode = useThemeStore((state) => state.mode)

    return (
        <>
            <div className="mb-8">
                <Logo
                    type="streamline"
                    mode={mode}
                    imgClass="mx-auto"
                    logoWidth={60}
                />
            </div>
            <div className="mb-8">
                <h3 className="mb-1">Sign Up</h3>
                <p className="font-semibold heading-text">Add Modified User</p>
            </div>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <span className="break-all">{message}</span>
                </Alert>
            )}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full">
                {/* Left Column (4/12 width) */}
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
                    <SignUpForm
                        disableSubmit={disableSubmit}
                        setMessage={setMessage}
                        employeeCategory="defaultCategory"
                        gender="defaultGender"
                        region="defaultRegion"
                        area="defaultArea"
                        territory="defaultTerritory"
                        range="defaultRange"
                    />
                </div>

                {/* Right Column (8/12 width) */}
                <div className="w-full lg:w-2/3 mt-1 lg:mt-0">
                    <UserTable />
                </div>
            </div>

            <div>
                <div className="mt-6 text-center">
                    <span>Already have an account? </span>
                    <ActionLink
                        to={signInUrl}
                        className="heading-text font-bold"
                        themeColor={false}
                    >
                        Sign in
                    </ActionLink>
                </div>
            </div>
        </>
    )
}

const SignUp = () => {
    return <SignUpBase />
}

export default SignUp
