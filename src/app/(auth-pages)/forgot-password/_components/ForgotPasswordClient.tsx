'use client'

import { apiForgotPassword } from '@/services/AuthService'
import ForgotPassword from '@/components/auth/ForgotPassword'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import type { OnForgotPasswordSubmitPayload } from '@/components/auth/ForgotPassword'

const ForgotPasswordClient = () => {
    const handleForgotPasswordSubmit = async ({
        values,
        setSubmitting,
        setMessage,
        setEmailSent,
    }: OnForgotPasswordSubmitPayload) => {
        try {
            setSubmitting(true)
            await apiForgotPassword(values)
            toast.push(
                <Notification title="ایمیل ارسال شد!" type="success">
                    ما یک ایمیل برای بازنشانی رمز عبور شما ارسال کرده‌ایم
                </Notification>,
            )
            setEmailSent(true)
        } catch (error) {
            setMessage(error as string)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <ForgotPassword onForgotPasswordSubmit={handleForgotPasswordSubmit} />
    )
}

export default ForgotPasswordClient
