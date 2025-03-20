import { Icon } from '@/lib/ui-kit/components/ui/Icon.component'
import { IconType } from '@/lib/ui-kit/components/ui/Icon.types'

export const StoriesIcon = () => {
  return (
    <section>
      <div className="flex p-10">
        <Icon type={IconType.arrow_right} />
      </div>
      <div className="flex bg-base-dark p-10">
        <Icon className="icon-light" type={IconType.arrow_right} />
      </div>
    </section>
  )
}
