import {
  Accordion,
  AccordionContent,
  AccordionContentWrapper,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerContainer,
} from './Accordion.component'

export const StoriesAccordion = () => {
  return (
    <section>
      <div className="flex p-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex p-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <AccordionTriggerContainer prefix="1">
                Is it accessible?
              </AccordionTriggerContainer>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex">
                <div className="paragraph-l w-[76px] text-gray-800" />
                <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <AccordionTriggerContainer prefix="2">
                Is it styled?
              </AccordionTriggerContainer>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentWrapper>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContentWrapper>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <AccordionTriggerContainer prefix="1">
                Is it animated?
              </AccordionTriggerContainer>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentWrapper>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContentWrapper>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
