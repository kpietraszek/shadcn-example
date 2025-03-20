'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationListItem,
} from '@/lib/ui-kit/components/ui/NavigationMenu.component'
import logo from '@/public/next.jpeg'

import { CardNav } from './CardNav.component'
import { dataMockNavHeader } from './NavHeader.mock'

interface NavHeaderProps {
  className?: string
  bg?: string
}

export const NavHeader = ({ className, bg }: NavHeaderProps) => {
  return (
    <NavigationMenu className={`${className} ${bg} fixed z-30 hidden xl:flex`}>
      <Link href="/" className="h-[48px] w-[175px]">
        <Image src={logo} width={70} height={48} alt="logo" />
      </Link>
      <NavigationMenuList>
        {dataMockNavHeader.map(({ links, title, recommendedLink }) => {
          if (links.length === 1)
            return (
              <NavigationMenuItem key={title}>
                <Link href={links[0].slug} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {links[0].linkName}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )

          return (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[100vw] gap-40 p-10 pb-16 lg:grid-cols-2">
                  {recommendedLink && <CardNav data={recommendedLink} />}

                  <div className="flex">
                    <ul className="flex w-[50%] flex-col">
                      {links
                        .filter((link, index) => index % 2 == 1)
                        .map(({ linkName, slug, description }, index) => {
                          if (index === 0) return

                          return (
                            <NavigationListItem
                              key={linkName}
                              href={slug}
                              title={linkName}
                            >
                              {description}
                            </NavigationListItem>
                          )
                        })}
                    </ul>

                    <ul className="flex w-[50%] flex-col">
                      {links
                        .filter((link, index) => index % 2 == 0)
                        .map(({ linkName, slug, description }, index) => {
                          if (index === 0) return

                          return (
                            <NavigationListItem
                              key={linkName}
                              href={slug}
                              title={linkName}
                            >
                              {description}
                            </NavigationListItem>
                          )
                        })}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
