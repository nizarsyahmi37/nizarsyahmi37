import { cn } from "@/lib/utils"
import { harlekin, impact } from "@/lib/fonts"
import { home } from "@/locales/en"

import PageSectionLayout from "@/components/modules/layout/page/section"
import CardService from "@/components/modules/card/service"

const services = home.services

export default function ViewHomeSectionServices() {
	return (
		<PageSectionLayout
			title={services.services}
			sectionId={services.services.toLowerCase()}
			index={services.index}
			totalIndex={home.totalIndex}
			className={`bg-primary min-h-[calc(100vh-4.5rem)] w-auto`}
		>
			<div className={`${impact.className} z-[0] sticky top-[3.75rem] -mt-[2px] text-primary-foreground text-[4.5rem] px-6 py-21 leading-none lg:text-[9rem] lg:top-[4.5rem]`}>
				{services.coverage}
			</div>
			<div
				className={`h-[50vh]`}
			/>
			<div className={`relative z-[1] grid grid-cols-2 lg:grid-cols-4`}>
				{services.data.map((itm, id) => (
					<CardService
						key={itm.id}
						className={cn(
							itm.style,
							`grid grid-rows-[auto_1fr] sticky mt-[calc(100vh/3)] top-[6.75rem] bg-background border-2 border-foreground h-[calc((100vh-7.5rem)/5*4)] w-[calc(((100vw-4px)/2)+4px)] lg:h-[calc((100vh-7.5rem)/2)] lg:w-[calc(((100vw-4.5rem)/4)+2px)] lg:top-[7.5rem] lg:mt-[7.5rem]`,
							id % 4 == 0 && `border-l-0`,
							id % 2 == 0 && id % 4 != 0 && `border-l-0 lg:border-l-2`,
							id > 3 && `lg:top-[calc(((100vh-7.5rem)/2)+7.5rem-2px)]`
						)}
					>
						<h3 className={`${harlekin.className} flex items-center align-middle content-center gap-1 p-3 text-3xl`}>
							<span className={`text-primary`}>
								{itm.icon}
							</span> {itm.title}
						</h3>
						<p className={`p-3 grid items-end`}>
							{itm.description}
						</p>
					</CardService>					
				))}
			</div>
		</PageSectionLayout>
	)
}
