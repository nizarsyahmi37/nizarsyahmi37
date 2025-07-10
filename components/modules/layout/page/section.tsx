import { ReactNode } from "react"
import { impact } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function PageSectionLayout({
	children,
	title,
	sectionId,
	index,
	totalIndex,
	className
}: {
	children: ReactNode
	title: string
	sectionId: string
	index: string
	totalIndex: string
	className?: string
}) {
	return (
		<section id={sectionId} className={cn(`min-h-[50vh] relative`, className)}>
			<div className={`${impact.className} z-[19] bg-background px-6 py-3 sticky border-y-2 border-foreground top-[3.75rem] -mt-[2px] grid grid-cols-2 items-center content-center align-middle lg:top-[4.5rem]`}>
				<h2 className={`text-start`}>
					{title}
				</h2>
				<div className={`text-end`}>
					<span className={`text-primary`}>{index}</span> / {totalIndex}
				</div>
			</div>
			<div>
				{children}
			</div>
		</section>
	)
}
