import toast from '@/components/ui/toast'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'

const Closable = () => {
    const toastNotification = (
        <Notification closable title="پیام">
            گربه چاق بر روی فرش نشست و با پنجه‌هایش صاحب را آزار داد.
        </Notification>
    )

    function openNotification() {
        toast.push(toastNotification)
    }

    return (
        <div>
            <Button onClick={openNotification}>نمایش توست</Button>
        </div>
    )
}

export default Closable
