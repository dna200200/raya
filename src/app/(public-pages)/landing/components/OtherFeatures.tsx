import Container from './LandingContainer'
import RegionMap from '@/components/shared/RegionMap'
import { TbCircleCheck } from 'react-icons/tb'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const mapMeta: Record<string, { img: string }> = {
    us: { img: '/img/countries/US.png' },
    cn: { img: '/img/countries/CN.png' },
    es: { img: '/img/countries/ES.png' },
    sa: { img: '/img/countries/SA.png' },
}

const data = [
    {
        id: 'us',
        name: 'United States',
        value: 38.61,
        coordinates: [-95.7129, 37.0902],
    },
    {
        id: 'es',
        name: 'India',
        value: 26.42,
        coordinates: [-51.9253, -14.235],
    },
    {
        id: 'cn',
        name: 'Brazil',
        value: 32.79,
        coordinates: [78.9629, 20.5937],
    },
    {
        id: 'sa',
        name: 'United Kingdom',
        value: 17.42,
        coordinates: [0.1278, 51.5074],
    },
]

const PointList = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center gap-2">
            <TbCircleCheck className="text-xl" />
            <span>{children}</span>
        </div>
    )
}

const OtherFeatures = () => {
    return (
        <div id="otherFeatures" className="relative z-20 py-10 md:py-40">
            <Container>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, type: 'spring', bounce: 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 className="my-6 text-5xl">
                        متناسب با هر نیاز
                    </motion.h2>
                    <motion.p className="mx-auto max-w-[600px]">
                        طراحی شده برای سازگاری با هر کاربر و منطقه، ارائه عملکرد بی‌نقص در تمام دستگاه‌ها و زبان‌ها.
                    </motion.p>
                </motion.div>
                <div className="mt-20">
                    <motion.div
                        className="bg-gray-100 dark:bg-gray-800 rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden mb-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            type: 'spring',
                            bounce: 0.1,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                            <div>
                                <h3 className="text-4xl">طراحی واکنش‌گرا</h3>
                                <p className="mt-6 max-w-[550px] text-lg">
                                    برنامه شما در تمام دستگاه‌ها، از دسکتاپ تا تبلت و تلفن‌های همراه، خیره‌کننده به نظر خواهد رسید. نیازی به نگرانی در مورد مقیاس‌بندی نیست - برای کار بی‌نقص در هر اندازه صفحه طراحی شده است.
                                </p>
                                <div className="mt-12 flex flex-col gap-4">
                                    <PointList>
                                        به طور خودکار چیدمان را برای رزولوشن‌های مختلف صفحه تنظیم می‌کند.
                                    </PointList>
                                    <PointList>
                                        کوئری‌های رسانه‌ای بهینه‌شده برای عملکرد بهتر در دستگاه‌های کوچکتر.
                                    </PointList>
                                    <PointList>
                                        انتقال‌های روان و طراحی سیال برای تعاملات لمسی.
                                    </PointList>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <motion.div
                                    className="p-2 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-[32px] max-w-[300px] lg:absolute lg:top-[-50px]"
                                    whileHover={{ y: -20 }}
                                >
                                    <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/70 dark:to-gray-800 scale-[1.1] pointer-events-none" />
                                    <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden max-h-[450px]">
                                        <img
                                            src="/img/landing/features/mobile.png"
                                            alt="نمای موبایل"
                                            className="rounded-[24px]"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 dark:bg-gray-800 rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden mb-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            type: 'spring',
                            bounce: 0.1,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                            <div className="relative flex justify-center">
                                <div className="lg:absolute h-full w-full left-0 md:left-[-50px] scale-[1.1]">
                                    <RegionMap
                                        data={data}
                                        valueSuffix="%"
                                        hoverable={false}
                                        marker={(Marker) => (
                                            <>
                                                {data.map(
                                                    ({
                                                        name,
                                                        coordinates,
                                                        id,
                                                    }) => (
                                                        <Marker
                                                            key={name}
                                                            coordinates={
                                                                coordinates as [
                                                                    number,
                                                                    number,
                                                                ]
                                                            }
                                                            className="cursor-pointer group"
                                                        >
                                                            <motion.image
                                                                className="shadow-lg"
                                                                href={
                                                                    mapMeta[id]
                                                                        .img
                                                                }
                                                                height="80"
                                                                width="80"
                                                                whileHover={{
                                                                    scale: 1.1,
                                                                }}
                                                            />
                                                        </Marker>
                                                    ),
                                                )}
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-4xl">پشتیبانی چند زبانه</h3>
                                <p className="mt-6 max-w-[550px] text-lg">
                                    دامنه دسترسی خود را با پشتیبانی چند زبانه داخلی گسترش دهید. به راحتی بین زبان‌ها جابجا شوید و تجربه روانی را برای کاربران در سراسر جهان تضمین کنید.
                                </p>
                                <div className="mt-12 flex flex-col gap-4">
                                    <PointList>
                                        تغییر سریع و آسان زبان از طریق منوی کشویی.
                                    </PointList>
                                    <PointList>
                                        پشتیبانی از تمام زبان‌های اصلی و به راحتی قابل گسترش به زبان‌های جدید.
                                    </PointList>
                                    <PointList>
                                        یکپارچه با <code>react-i18next</code> برای ترجمه‌های بی‌نقص.
                                    </PointList>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="bg-gray-100 dark:bg-gray-800 rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden mb-10">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
                            <div>
                                <h3 className="text-4xl">آماده برای چیدمان RTL</h3>
                                <p className="mt-6 max-w-[550px] text-lg">
                                    چه کاربران شما در مناطق راست به چپ باشند یا چپ به راست، گزینه‌های چیدمان ما شما را پوشش می‌دهد. به راحتی برای زبان‌هایی مانند عربی یا عبری به RTL تغییر دهید.
                                </p>
                                <div className="mt-12 flex flex-col gap-4">
                                    <PointList>
                                        تبدیل فوری RTL با یک تغییر تنظیم.
                                    </PointList>
                                    <PointList>
                                        کاملاً تست شده برای ثبات بصری و خوانایی.
                                    </PointList>
                                    <PointList>
                                        در تمام اجزاء کار می‌کند و تجربه کاربری یکنواختی را تضمین می‌کند.
                                    </PointList>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <motion.div
                                    whileHover={{ y: -20 }}
                                    className="relative flex justify-center w-full"
                                >
                                    <div className="p-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 rounded-[32px] max-w-[550px] lg:absolute ">
                                        <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/50 dark:to-gray-800 scale-[1.1] pointer-events-none" />
                                        <div className="bg-white dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden p-2">
                                            <img
                                                src="/img/landing/features/rtl.png"
                                                alt="تصویر برنامه"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default OtherFeatures
