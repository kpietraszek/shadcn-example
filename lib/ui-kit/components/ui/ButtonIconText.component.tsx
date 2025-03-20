import { cn } from '@/lib/utils'

import { Button, ButtonVariantType } from './Button.component'
import { Icon } from './Icon.component'
import { IconType } from './Icon.types'

interface ButtonIconTextProps {
  children: React.ReactNode
  iconType: IconType
  className?: string
  variant?: ButtonVariantType
  icon?: 'left' | 'right'
}

export const ButtonIconText = ({
  children,
  className,
  iconType,
  variant = 'primary',
  icon = 'right',
}: ButtonIconTextProps) => {
  const isPrimary = variant === 'primary'

  return (
    <Button className={cn(className, 'gap-4')} variant={variant}>
      {icon === 'left' ? (
        <Icon className={cn(isPrimary && 'icon-light')} type={iconType} />
      ) : null}
      {children}
      {icon === 'right' ? (
        <Icon className={cn(isPrimary && 'icon-light')} type={iconType} />
      ) : null}
    </Button>
  )
}
