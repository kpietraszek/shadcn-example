'use client'

import { Button } from './Button.component'
import { Icon } from './Icon.component'
import { IconType } from './Icon.types'

interface ButtonIconProps {
  className?: string
  iconType: IconType
}

export const ButtonIcon = ({ className, iconType }: ButtonIconProps) => {
  return (
    <Button className={className} variant="secondary" size="icon">
      <Icon type={iconType} />
    </Button>
  )
}
