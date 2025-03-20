'use client'

import React, { useState, useEffect } from 'react'

import { NavHeader } from '@/lib/ui-kit/components/NavHeader.component'
import { NavHeaderMobile } from '@/lib/ui-kit/components/NavHeaderMobile.component'

export const SectionHeader = () => {
  // INFO: this is initial experiment and shall be moved to a NavHeaderWrapper component
  // TODO: move ot NavHeaderWrapper component
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrollingUp(scrollTop <= lastScrollTop)
      setIsAtTop(scrollTop === 0)
      setLastScrollTop(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <header>
      <NavHeader
        className={`nav-header fixed xl:flex ${
          isScrollingUp ? '' : 'scroll-up'
        }`}
        bg={isAtTop ? '' : 'bg-gray-200'}
      />
      {/* INFO: temorarily set to show at all times on mobile */}
      {/* <NavHeaderMobile
        className={`nav-header fixed flex xl:hidden ${
          isScrollingUp ? '' : 'scroll-up'
        }`}
      /> */}
      <NavHeaderMobile className={`nav-header fixed flex xl:hidden`} />
    </header>
  )
}
