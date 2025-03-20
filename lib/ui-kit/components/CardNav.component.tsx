import Image from 'next/image'
import Link from 'next/link'

import imgCardNav from '@/public/img_card_nav.webp'

interface CardNavProps {
  data: {
    heading: string
    title: string
    date: string
    image: string
    slug: string
  }
}

export const CardNav = ({ data }: CardNavProps) => {
  const { heading, title, date, slug } = data

  return (
    <Link href={slug} className="group flex h-[289px] flex-col xl:flex-row">
      <Image
        src={imgCardNav}
        width={253}
        height={289}
        alt="recommended reading image"
        className="transition-all duration-200 ease-in group-hover:scale-110"
      />
      <div className="xl:flex xl:h-full xl:flex-col xl:justify-between xl:px-6">
        <div className="paragraph-xs flex-1 text-gray-800">{heading}</div>
        <div>
          <h2 className="paragraph-xxl font-semibold group-hover:underline xl:pb-4">
            {title}
          </h2>
          <div className="paragraph-xs text-gray-800">{date}</div>
        </div>
      </div>
    </Link>
  )
}
