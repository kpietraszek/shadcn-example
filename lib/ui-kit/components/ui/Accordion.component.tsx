'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '@/lib/utils'

import AccordionClosed from '../../assets/icons/accordion_closed.svg'
import AccordionOpened from '../../assets/icons/accordion_opened.svg'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border-b border-gray-400 last-of-type:border-none',
      className,
    )}
    {...props}
  />
))

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between self-stretch bg-gray-200 py-4 pl-6 pr-10 transition-all xl:hover:bg-base-dark xl:hover:text-base-light [&[data-state=closed]>svg.icon-opened]:hidden [&[data-state=open]>svg.icon-closed]:hidden [&[data-state=open]]:bg-base-light [&[data-state=open]]:text-base-dark xl:hover:[&[data-state=open]]:text-base-dark',
        className,
      )}
      {...props}
    >
      {children}
      <AccordionOpened className="icon-opened h-16 w-16 shrink-0 transition-transform duration-200" />
      <AccordionClosed className="icon-closed h-16 w-16 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

interface AccordionTriggerContainerProps {
  children: React.ReactNode
  prefix: string
}

const AccordionTriggerContainer = ({
  children,
  prefix,
}: AccordionTriggerContainerProps) => {
  return (
    <div className="paragraph-xxl text-current text-color-inherit flex flex-col items-start xl:flex-row">
      <div className="w-auto font-normal xl:w-[76px] ">{prefix}</div>
      <div className="font-semibold">{children}</div>
    </div>
  )
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down [&[data-state=open]]:bg-base-light"
    {...props}
  >
    <div className={cn('pb-8 pl-6 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

interface AccordionContentWrapperProps {
  children: React.ReactNode
}

const AccordionContentWrapper = ({
  children,
}: AccordionContentWrapperProps) => {
  return (
    <div className="flex">
      <div className="paragraph-l w-[76px] text-gray-800" />
      <div>{children}</div>
    </div>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionTriggerContainer,
  AccordionContentWrapper,
}
