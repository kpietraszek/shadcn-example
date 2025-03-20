import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Icon } from '@/lib/ui-kit/components/ui/Icon.component'
import { IconType } from '@/lib/ui-kit/components/ui/Icon.types'
import logo from '@/public/next.jpeg'

import {
  dataMockNavHeader,
  dataMockMobileRecommendedLink,
} from './NavHeader.mock'

interface MobileNavHeaderProps {
  className?: string
}
export const NavHeaderMobile = ({ className }: MobileNavHeaderProps) => {
  const [isActive, setIsActive] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isActive])

  const onItemClick = (title: string) => {
    setActiveItem(activeItem === title ? '' : title)
  }

  return (
    <header
      className={`${className} fixed z-30 !max-h-[100dvh] max-h-[100vh] w-[100vw] flex-col items-start justify-start bg-gray-200 text-left text-gray-1000 [backdrop-filter:blur(80px)]`}
    >
      <div className="box-border flex w-full flex-row items-center justify-between border-b-[1px] border-solid border-gray-transparent-1000 px-6 py-4">
        <Link href="/" className="h-[48px] w-[175px]">
          <Image src={logo} width={70} height={48} alt="logo" />
        </Link>
        <button
          className={`flex flex-col items-start justify-start rounded-full ${
            isActive && 'bg-gray-50'
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex flex-row items-center justify-start p-4">
            <div className="flex flex-row items-center justify-start">
              <Icon type={isActive ? IconType.close : IconType.navigation} />
            </div>
          </div>
        </button>
      </div>

      <div
        className={`${
          isActive ? 'flex' : 'hidden'
        } flex-col items-center justify-start gap-[40px] self-stretch overflow-auto px-0 pb-8 pt-0`}
      >
        <div className="flex w-full flex-col items-start justify-start">
          {dataMockNavHeader.map(({ links, title }) => (
            <div
              className={`flex w-full flex-col items-end justify-start border-b-[1px] border-solid border-gray-transparent-1000 px-0 first:pt-4 ${
                activeItem === title && 'bg-gray-50'
              }`}
              key={title}
            >
              {links.length === 1 && (
                <Link
                  href={links[0].slug}
                  onClick={() => setIsActive(!isActive)}
                  className="box-border flex w-full cursor-pointer flex-row items-center justify-start px-0 py-6 text-left"
                >
                  <button onClick={() => onItemClick(title)}>
                    <div className="flex flex-1 flex-row items-center justify-between px-6 py-0">
                      <div className="paragraph-xl flex-1">{title}</div>
                      {links.length > 1 && <Icon type={IconType.arrow_down} />}
                    </div>
                  </button>
                </Link>
              )}
              {links.length > 1 && (
                <button
                  onClick={() => onItemClick(title)}
                  className="box-border flex w-full cursor-pointer flex-row items-center justify-start px-0 py-6 text-left"
                >
                  <div className="flex flex-1 flex-row items-center justify-between px-6 py-0">
                    <div className="paragraph-xl flex-1">{title}</div>
                    {links.length > 1 && <Icon type={IconType.arrow_down} />}
                  </div>
                </button>
              )}
              {links.length > 1 &&
                links.map(({ linkName, slug, description }) => (
                  <Link
                    key={slug}
                    className={`box-border w-full flex-row items-center justify-start border-b-[1px] border-solid border-gray-transparent-1000 px-6 py-4 last:border-b-0 ${
                      activeItem === title ? 'flex' : 'hidden'
                    }`}
                    href={slug}
                    onClick={() => setIsActive(!isActive)}
                  >
                    <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                      <div className="paragraph-l">{linkName}</div>
                      <div className="paragraph-xs text-[13px] leading-[20px] text-gray-800">
                        {description}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          ))}
        </div>

        <a
          href={dataMockMobileRecommendedLink.slug}
          className="mx-6 flex max-w-[327px] flex-col items-start justify-start gap-[24px] text-gray-800"
        >
          <Image
            className="max-h-[140px] max-w-[327px] shrink-0 self-center object-cover"
            alt=""
            height={147}
            width={327}
            src={dataMockMobileRecommendedLink.image}
          />
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="paragraph-xs font-normal">
              {dataMockMobileRecommendedLink.heading}
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-gray-1000">
              <div className="paragraph-xxl font-semibold">
                {dataMockMobileRecommendedLink.title}
              </div>
              <div className="paragraph-xs font-normal">
                {dataMockMobileRecommendedLink.date}
              </div>
            </div>
          </div>
        </a>
      </div>
    </header>
  )
}
