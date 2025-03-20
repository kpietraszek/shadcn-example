type NavHeaderType = (
  | {
      title: string
      links: {
        linkName: string
        slug: string
        description: string
      }[]
      recommendedLink: {
        heading: string
        title: string
        date: string
        image: string
        slug: string
      }
    }
  | {
      title: string
      links: {
        linkName: string
        slug: string
        description: string
      }[]
      recommendedLink?: undefined
    }
)[]

export const dataMockMobileRecommendedLink = {
  heading: 'Recommended reading',
  title:
    'Test and Switzerland for UNHCR Recognized for Philanthropy Innovation',
  date: 'Feb 06, 2024',
  image: '/img_card_nav.webp',
  slug: '/blog/test-recommended',
}

export const dataMockNavHeader: NavHeaderType = [
  {
    title: 'About',
    links: [
      {
        linkName: 'About',
        slug: '/',
        description: 'See Foundation’s role in blockchain advancement',
      },
    ],
  },
  {
    title: 'Blog',
    links: [
      {
        linkName: 'Blog',
        slug: '/',
        description: 'See Foundation’s role in blockchain advancement',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        linkName: 'Contact',
        slug: '/',
        description: 'See Foundation’s role in blockchain advancement',
      },
    ],
  },
]

export const mockDataNavItems: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
