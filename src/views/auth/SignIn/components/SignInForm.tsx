import { useState, useEffect } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormItem, Form } from '@/components/ui/Form'
import PasswordInput from '@/components/shared/PasswordInput'
import classNames from '@/utils/classNames'
import { useAuth } from '@/auth'
import { useAppSelector, useAppDispatch } from '@/Store/Hooks'

//import { loginUser } from '../../../../actions/UserAction'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'

import type { ReactNode } from 'react'
import { Navigation } from 'yet-another-react-lightbox/*'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
    passwordHint?: string | ReactNode
    setMessage?: (message: string) => void
   
}



type SignInFormSchema = {
    userName: string
    password: string
}




// const validationSchema: ZodType<SignInFormSchema> = z.object({
//     userName: z
//         .string({ required_error: 'Please enter your User Name' })
//         .min(1, { message: 'Please enter your User Name' }),
//     password: z
//         .string({ required_error: 'Please enter your password' })
//         .min(1, { message: 'Please enter your password' }),
// })

const SignInForm = (props: SignInFormProps) => {
   
    const [isSubmitting, setSubmitting] = useState<boolean>(false)

    const { disableSubmit = false, className, setMessage, passwordHint } = props

    const {handleSubmit,formState: { errors },
        control,
    } = useForm<SignInFormSchema>({
        defaultValues: {
            userName: '',
            password: '',
        },
        //resolver: zodResolver(validationSchema),
    })


    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const signupData = { username, password };
    //         const response = await apiSignup(signupData);
    //         console.log('Signup successful:', response);
    //         // Redirect or show success message
    //     } catch (err) {
    //         console.error('Signup failed:', err);
    //         setError('Signup failed. Please try again.');
    //     }
    // };



    
    const { signIn } = useAuth()

    const onSignIn = async (values: SignInFormSchema) => {
        const {  userName, password } = values

        if (!disableSubmit) {
            setSubmitting(true)

            const result = await signIn({ userName , password })

            if (result?.status === 'failed') {
                setMessage?.(result.message)
            }
        }

        setSubmitting(false)
    }


    

    return (
        <div className={className}>
            <Form onSubmit={handleSubmit(onSignIn)}>
                <FormItem
                    label="Username"
                     invalid={Boolean(errors.userName)}
                    errorMessage={errors.userName?.message}
                >
                    <Controller
                        name="userName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                placeholder="Username"
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Password"
                    invalid={Boolean(errors.password)}
                    errorMessage={errors.password?.message}
                    className={classNames(
                        passwordHint ? 'mb-0' : '',
                        errors.password?.message ? 'mb-8' : '',
                    )}
                >
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <PasswordInput
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                {passwordHint}
                <Button
                    block
                    loading={isSubmitting}
                    variant="solid"
                    type="submit"
                >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>
            </Form>
        </div>
    )
}

export default SignInForm