import { StoriesNavHeader } from '@/lib/ui-kit/components/NavHeader.stories'
import { StoriesTypography } from '@/lib/ui-kit/components/Typography.stories'
import { StoriesAccordion } from '@/lib/ui-kit/components/ui/Accordion.stories'
import { StoriesButton } from '@/lib/ui-kit/components/ui/Button.stories'
import { StoriesIcon } from '@/lib/ui-kit/components/ui/Icon.stories'
import { StoriesTable } from '@/lib/ui-kit/components/ui/Table.stories'

const Components = () => {
  return (
    <main className="bg-gray-200 pb-40">
      <StoriesTable />
      <StoriesNavHeader />
      <StoriesTypography />
      <StoriesButton />
      <StoriesIcon />
      <StoriesAccordion />
    </main>
  )
}

export default Components
