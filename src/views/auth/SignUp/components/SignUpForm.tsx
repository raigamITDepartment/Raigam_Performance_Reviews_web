import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormItem, Form } from '@/components/ui/Form'
import { useAuth } from '@/auth'
import Select from '@/components/ui/Select'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'

interface SignUpFormProps extends CommonProps {
    disableSubmit?: boolean
    setMessage?: (message: string) => void
    employeeCategory: string
    gender: string
    region: string
    area: string
    territory: string
    range: string
}


type SignUpFormSchema = {
    userName: string
    password: string
    email: string
    mobileNumber: string
    confirmPassword: string
    employeeCategory: string
    department: string
    grade: string
    channel: string
    region: string
    area: string
    territory: string
    range: string
}

const validationSchema: ZodType<SignUpFormSchema> = z
    .object({
        email: z.string({ required_error: 'Please enter your email' }).email('Invalid email address'),
        userName: z.string({ required_error: 'Please enter your name' }),
        password: z.string({ required_error: 'Password Required' }),
        mobileNumber: z.string({ required_error: 'Mobile Number Required' }).regex(/^\d+$/, 'Mobile Number must be numeric'),
        confirmPassword: z.string({ required_error: 'Please confirm your password' }),
        employeeCategory: z.string({ required_error: 'Please select your employee category' }),
        department: z.string({ required_error: 'Please select your department' }),
        grade: z.string({ required_error: 'Please select your grade' }),
        channel: z.string({ required_error: 'Please select your channel' }),
        region: z.string({ required_error: 'Please select your region' }),
        area: z.string({ required_error: 'Please select your area' }),
        territory: z.string({ required_error: 'Please select your territory' }),
        range: z.string({ required_error: 'Please select your range' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Password not match',
        path: ['confirmPassword'],
    })

const SignUpForm = (props: SignUpFormProps) => {
    const { disableSubmit = false, className, setMessage } = props

    const [isSubmitting, setSubmitting] = useState<boolean>(false)

    const { signUp } = useAuth()

    const {
        handleSubmit,
        formState: { errors },
        control,
        watch } = useForm<SignUpFormSchema>({
            resolver: zodResolver(validationSchema),
        })

    const onSignUp = async (values: SignUpFormSchema) => {
        const { userName, password, email, mobileNumber } = values

        if (!disableSubmit) {
            setSubmitting(true)
            const result = await signUp({ userName, password, email })

            if (result?.status === 'failed') {
                setMessage?.(result.message)
            }

            setSubmitting(false)
        }
    }

    return (
        <div className={className} style={{ maxWidth: '500px', marginLeft: '0 auto' }}>
            <div className="card">
                <div className="card-body">
                    <Form onSubmit={handleSubmit(onSignUp)}>
                        <FormItem
                            label="User name"
                            invalid={Boolean(errors.userName)}
                            errorMessage={errors.userName?.message}
                            
                        >
                            <Controller
                                name="userName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        size="sm"
                                        type="text"
                                        placeholder="User Name"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>
                        <FormItem
                            label="Email"
                            invalid={Boolean(errors.email)}
                            errorMessage={errors.email?.message}
                        >
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="email"
                                        size='sm'
                                        placeholder="Email"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>
                        <FormItem
                            label="Mobile Number"
                            invalid={Boolean(errors.mobileNumber)}
                            errorMessage={errors.mobileNumber?.message}
                        >
                            <Controller
                                name="mobileNumber"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        size="sm"
                                        type="text"
                                        placeholder="Mobile Number"
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
                        >
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        size="sm"
                                        type="password"
                                        autoComplete="off"
                                        placeholder="Password"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>
                        <FormItem
                            label="Confirm Password"
                            invalid={Boolean(errors.confirmPassword)}
                            errorMessage={errors.confirmPassword?.message}
                        >
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        size="sm"
                                        type="password"
                                        autoComplete="off"
                                        placeholder="Confirm Password"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <FormItem
                                label="Employee Category"
                                invalid={Boolean(errors.employeeCategory)}
                                errorMessage={errors.employeeCategory?.message}
                                style={{ flex: 1, marginRight: '20px' }}
                            >
                                <Controller
                                    name="employeeCategory"
                                    control={control}
                                    rules={{ required: 'Employee Category is required' }}
                                    render={({ field }) => (
                                        <Select
                                            size="sm"
                                            className="mb-4"
                                            placeholder="Please Select"
                                            // options={[
                                            //     { label: 'sales', value: 'sales' },
                                            //     { label: 'Admin', value: 'admin' },
                                            //     { label: 'Manage', value: 'Manager' },
                                            // ]}
                                            value={field.value}
                                            onChange={(selectedOption) => field.onChange(selectedOption)}
                                        />
                                    )}
                                />
                            </FormItem>

                            <FormItem
                                label="Department"
                                invalid={Boolean(errors.department)}
                                errorMessage={errors.department?.message}
                                style={{ flex: 1, marginLeft: '10px' }}
                            >
                                <Controller
                                    name="department"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            size="sm"
                                            className="mb-4"
                                            placeholder="Please Select"
                                            //options={Department}
                                            {...field}
                                        />
                                    )}
                                />
                            </FormItem>


                        </div>

                        <FormItem
                            label="Select Grade"
                            invalid={Boolean(errors.grade)}
                            errorMessage={errors.grade?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="grade"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select Grade "
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>


                        <FormItem
                            label="Select Region"
                            invalid={Boolean(errors.region)}
                            errorMessage={errors.region?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="region"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select Region"
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label="Select Channel "
                            invalid={Boolean(errors.channel)}
                            errorMessage={errors.channel?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="channel"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select Region"
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label="Select Area"
                            invalid={Boolean(errors.area)}
                            errorMessage={errors.area?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="area"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select"
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>
                        <FormItem
                            label="Select Territory"
                            invalid={Boolean(errors.territory)}
                            errorMessage={errors.territory?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="territory"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select Area"
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>


                        <FormItem
                            label="Select Range "
                            invalid={Boolean(errors.range)}
                            errorMessage={errors.range?.message}
                            style={{ flex: 1, marginLeft: '10px' }}
                        >
                            <Controller
                                name="range"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        size="sm"
                                        className="mb-4"
                                        placeholder="Please Select Range"
                                        //options={Department}
                                        {...field}
                                    />
                                )}
                            />



                        </FormItem>

                        <Button
                            block
                            loading={isSubmitting}
                            variant="solid"
                            type="submit"
                        >
                            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm
