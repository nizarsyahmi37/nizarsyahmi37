import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { impact } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function AccordionMain({
	data,
	defaultValue,
	collapsible = true,
	className
} : {
	data: {
		id: string
		title: string
		description: string
	}[]
	defaultValue?: string
	collapsible?: boolean
	className?: string
}) {	
	return (
		<Accordion
			type={`single`}
			collapsible={collapsible}
			className={cn(className)}
			defaultValue={defaultValue}
		>
			{data.map((item) => (
				<AccordionItem value={item.id} key={item.id} className={`border-foreground border-b-2`}>
					<AccordionTrigger className={`${impact.className} px-6 py-4 align-middle cursor-pointer text-base data-[state=open]:text-primary hover:data-[state=open]:text-foreground hover:text-primary`}>
						{item.title}
					</AccordionTrigger>
					<AccordionContent className={`border-primary border-t-2 flex flex-col gap-4 p-6`}>
						{item.description}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
