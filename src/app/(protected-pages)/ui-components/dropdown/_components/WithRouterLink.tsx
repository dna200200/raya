import Dropdown from '@/components/ui/Dropdown'
import Link from 'next/link'

const WithRouterLink = () => {
    return (
        <div>
            <Dropdown title="کلیک کنید!">
                <Dropdown.Item>
                    <Link
                        className="menu-item-link"
                        href="/ui-components/checkbox"
                    >
                        چک‌باکس
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/button">
                        دکمه
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/alert">
                        هشدار
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/ui-components/dialog">
                        دیالوگ
                    </Link>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default WithRouterLink
