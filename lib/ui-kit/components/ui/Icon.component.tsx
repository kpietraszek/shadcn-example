'use client'

import arrowDownIcon from '../../assets/icons/arrow_down.svg'
import arrowLeftIcon from '../../assets/icons/arrow_left.svg'
import arrowRightIcon from '../../assets/icons/arrow_right.svg'
import arrowRightShortIcon from '../../assets/icons/arrow_right_short.svg'
import arrowRightSkewIcon from '../../assets/icons/arrow_right_skew.svg'
import arrowRightWhiteIcon from '../../assets/icons/arrow_right_white.svg'
import checkmarkIcon from '../../assets/icons/checkmark.svg'
import chevronDownIcon from '../../assets/icons/chevron_down.svg'
import closeIcon from '../../assets/icons/close.svg'
import facebook from '../../assets/icons/facebook.svg'
import industryBankingIcon from '../../assets/icons/industry_banking.svg'
import industryHealthcareIcon from '../../assets/icons/industry_healthcare.svg'
import industryLogisticsIcon from '../../assets/icons/industry_logistics.svg'
import link from '../../assets/icons/link.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import navigationIcon from '../../assets/icons/navigation.svg'
import xTwitter from '../../assets/icons/x_twitter.svg'

import { IconType } from './Icon.types'

interface IconProps {
  type: IconType
  className?: string
}

const iconMap = {
  [IconType.arrow_right]: arrowRightIcon,
  [IconType.arrow_right_short]: arrowRightShortIcon,
  [IconType.arrow_left]: arrowLeftIcon,
  [IconType.arrow_right_white]: arrowRightWhiteIcon,
  [IconType.arrow_down]: arrowDownIcon,
  [IconType.industry_banking_icon]: industryBankingIcon,
  [IconType.industry_logistics_icon]: industryLogisticsIcon,
  [IconType.industry_healthcare_icon]: industryHealthcareIcon,
  [IconType.checkmark]: checkmarkIcon,
  [IconType.close]: closeIcon,
  [IconType.navigation]: navigationIcon,
  [IconType.facebook]: facebook,
  [IconType.x_twitter]: xTwitter,
  [IconType.chevron_down]: chevronDownIcon,
  [IconType.linkedin]: linkedin,
  [IconType.link]: link,
  [IconType.arrow_right_skew]: arrowRightSkewIcon,
}

export const Icon = ({ type, className }: IconProps) => {
  const IconComponent = iconMap[type]

  if (!IconComponent) {
    return null
  }

  return (
    <div className={`${className} flex items-center`}>
      <IconComponent />
    </div>
  )
}
