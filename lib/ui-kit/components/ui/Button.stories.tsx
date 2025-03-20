import { Button } from '@/lib/ui-kit/components/ui/Button.component'
import { Icon } from '@/lib/ui-kit/components/ui/Icon.component'
import { IconType } from '@/lib/ui-kit/components/ui/Icon.types'

export const StoriesButton = () => {
  return (
    <section>
      <div className="flex p-10">
        <Button className="mr-5" variant="primary">
          Button
          <Icon className="icon-light ml-4" type={IconType.arrow_right} />
        </Button>
        <Button className="mr-5" variant="primary">
          <Icon className="icon-light mr-4" type={IconType.arrow_right} />
          Button
        </Button>
        <Button className="icon-light mr-5" variant="primary">
          Button
        </Button>
        <Button className="mr-5" variant="primary" size="icon">
          <Icon className="icon-light" type={IconType.arrow_right} />
        </Button>
      </div>
      <div className="flex p-10">
        <Button className="mr-5" variant="secondary">
          Button
          <Icon className="ml-4" type={IconType.arrow_right} />
        </Button>
        <Button className="mr-5" variant="secondary">
          <Icon className="mr-4" type={IconType.arrow_right} />
          Button
        </Button>
        <Button className="mr-5" variant="secondary">
          Button
        </Button>
        <Button className="mr-5" variant="secondary" size="icon">
          <Icon type={IconType.arrow_right} />
        </Button>
      </div>
      <div className="p-10">
        <Button variant="ghost">Button</Button>
      </div>
    </section>
  )
}
