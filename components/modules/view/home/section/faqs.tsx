import { harlekin, impact } from "@/lib/fonts"
import { home, terms } from "@/locales/en"

import PageSectionLayout from "@/components/modules/layout/page/section"
import AccordionMain from "@/components/modules/accordion/main"

const faqs = home.faqs

export default function ViewHomeSectionFaqs() {
	return (
		<PageSectionLayout
			title={faqs.faqs}
			sectionId={faqs.faqs.toLowerCase()}
			index={faqs.index}
			totalIndex={home.totalIndex}
			className={`bg-background`}
		>
			<div className={`relative min-h-[calc(75vh-4.5rem)] -my-1 min-w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:my-0 lg:-mx-1`}>
				<div className={`grid grid-rows-[auto_1fr] bg-background border-y-1 border-x-0 border-foreground lg:border-y-0 lg:border-x-1 lg:top-[7.5rem]`}>
					<div className={`grid gap-4 border-foreground border-b-2 px-3 pb-6 mt-6`}>
						<h3 className={`${harlekin.className} text-primary leading-none text-6xl lg:text-8xl`}>
							{faqs.frequently_asked}
						</h3>
						<p className={`p-3 max-w-[90%]`}>
							{faqs.description}
						</p>
					</div>
					<AccordionMain
						data={faqs.data}
						className={`w-full h-full`}
						defaultValue={`services`}
					/>
				</div>
				<div className={`bg-background flex items-start align-middle content-center border-y-1 border-x-0 border-foreground lg:border-y-0 lg:border-x-1 lg:top-[7.5rem] lg:sticky`}>
					<div className={`${impact.className} mx-auto grid min-h-[calc(50vh-3rem)] items-center align-middle content-center justify-center text-center text-[2.1rem] px-6 py-12 leading-none lg:text-[4.5rem] lg:top-[7.5rem] lg:sticky`}>
						<p>
							{terms.we_are_upgrading}
						</p>
						<p>
							{terms.this_section.toLowerCase()}
						</p>
						<p className={`text-primary`}>
							{terms.to_serve_you_better.toLowerCase()}
						</p>
					</div>
				</div>
			</div>
		</PageSectionLayout>
	)
}
