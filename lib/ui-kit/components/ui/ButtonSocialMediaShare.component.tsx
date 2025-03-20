'use client'

import { Button } from './Button.component'
import { Icon } from './Icon.component'
import { IconType } from './Icon.types'

interface ButtonIconProps {
  className?: string
  iconType: IconType
  href?: string
  onClick?: () => void
}

export const ButtonSocialMediaShare = ({
  className,
  iconType,
  href,
  onClick,
}: ButtonIconProps) => {
  return (
    <a href={href} target="_blank">
      <Button
        className={`xl:mr2 mr-2 border border-gray-400 ${className}`}
        variant="ghost"
        size="icon"
        onClick={onClick}
      >
        <Icon type={iconType} />
      </Button>
    </a>
  )
}
