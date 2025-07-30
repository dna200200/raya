import { NextRequest, NextResponse } from 'next/server'
import uniqueId from 'lodash/uniqueId'
import dayjs from 'dayjs'
import sleep from '@/utils/sleep'

export async function POST(req: NextRequest) {
    const { prompt } = await req.json()

    const userPrompt = prompt.toLocaleLowerCase()

    const responseContents = {
        regular: [
            `این یک پاسخ شبیه‌سازی شده است که برای شبیه‌سازی یک پاسخ تولید شده توسط هوش مصنوعی طراحی شده است. لطفاً توجه داشته باشید که این پاسخ توسط یک مدل واقعی هوش مصنوعی تولید نشده است. شما می‌توانید کلمات کلیدی 'title'، 'code'، 'list' را در درخواست خود بگنجانید تا انواع مختلفی از پاسخ‌های شبیه‌سازی شده را دریافت کنید.`,
            `شما در حال مشاهده یک پاسخ شبیه‌سازی شده برای اهداف نمایشی هستید. این پیام توسط یک مدل واقعی هوش مصنوعی تولید نشده است، بلکه به‌طور پیش‌نویس برای این نمایش نوشته شده است. شما می‌توانید کلمات کلیدی 'title'، 'code'، 'list' را در درخواست خود بگنجانید تا انواع مختلفی از پاسخ‌های شبیه‌سازی شده را دریافت کنید.`,
            `برای اهداف نمایشی، این پاسخ یک پیام شبیه‌سازی شده است. این پاسخ نشان می‌دهد که یک پاسخ معمولی هوش مصنوعی چگونه به نظر می‌رسد، اما توسط یک هوش مصنوعی واقعی تولید نشده است. شما می‌توانید کلمات کلیدی 'title'، 'code'، 'list' را در درخواست خود بگنجانید تا انواع مختلفی از پاسخ‌های شبیه‌سازی شده را دریافت کنید.`,
            `این پاسخ شبیه‌سازی شده بخشی از یک نمایش است و توسط یک هوش مصنوعی واقعی تولید نشده است. محتوای اینجا برای اهداف نمایشی از پیش تعریف شده است. شما می‌توانید کلمات کلیدی 'title'، 'code'، 'list' را در درخواست خود بگنجانید تا انواع مختلفی از پاسخ‌های شبیه‌سازی شده را دریافت کنید.`,
            `به عنوان بخشی از این نمایش، شما در حال مشاهده یک پاسخ شبیه‌سازی شده هستید. این متن توسط یک مدل هوش مصنوعی ایجاد نشده است، بلکه یک مثال پیش‌نویس برای نشان دادن عملکرد است. شما می‌توانید کلمات کلیدی 'title'، 'code'، 'list' را در درخواست خود بگنجانید تا انواع مختلفی از پاسخ‌های شبیه‌سازی شده را دریافت کنید.`,
        ],
        title: 'این یک پاسخ شبیه‌سازی شده با عنوان است.\n\n###### عنوان مثال\n\nلطفاً توجه داشته باشید که این توسط یک مدل واقعی هوش مصنوعی تولید نشده است.',
        code: "این یک پاسخ شبیه‌سازی شده با یک قطعه کد است.\n\n```\nfunction example() {\n    console.log('این یک قطعه کد شبیه‌سازی شده است.');\n}\n```\n\nلطفاً توجه داشته باشید که این توسط یک مدل واقعی هوش مصنوعی تولید نشده است.",
        list: 'این یک پاسخ شبیه‌سازی شده با یک لیست است.\n\n1. مورد اول\n2. مورد دوم\n3. مورد سوم\n\nلطفاً توجه داشته باشید که این توسط یک مدل واقعی هوش مصنوعی تولید نشده است.',
    }

    let content =
        responseContents.regular[
            Math.floor(Math.random() * responseContents.regular.length)
        ]

    if (userPrompt.includes('title')) {
        content = responseContents.title
    }
    if (userPrompt.includes('code')) {
        content = responseContents.code
    }
    if (userPrompt.includes('list')) {
        content = responseContents.list
    }

    const response = {
        id: uniqueId('ai-conversation-'),
        choices: [
            {
                finish_reason: 'stop',
                index: 0,
                message: {
                    content: content,
                    role: 'assistant',
                },
            },
        ],
        created: dayjs().unix(),
        model: 'gpt-4',
    }

    await sleep(200)

    return NextResponse.json(response)
}
