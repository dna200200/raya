import Button from '@/components/ui/Button'

const Shape = () => {
    return (
        <div className="flex-wrap inline-flex xl:flex items-center gap-2">
            <Button>گرد</Button>
            <Button shape="none">هیچ</Button>
            <Button shape="circle">دایره</Button>
        </div>
    )
}

export default Shape
