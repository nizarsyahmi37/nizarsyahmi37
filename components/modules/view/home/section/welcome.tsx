import { harlekin, impact } from "@/lib/fonts"
import { counters, general, home, terms } from "@/locales/en"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import PageSectionLayout from "@/components/modules/layout/page/section"
import CardCounter from "@/components/modules/card/counter"

const welcome = home.welcome

export default function ViewHomeSectionWelcome() {
	return (
		<PageSectionLayout
			title={welcome.welcome}
			sectionId={welcome.welcome.toLowerCase()}
			index={welcome.index}
			totalIndex={home.totalIndex}
			className={`bg-background min-h-[75vh]`}
		>
			<div className={`grid grid-cols-1 items-center align-middle content-center lg:grid-cols-[2fr_1fr]`}>
				<div className={`bg-background px-6 py-[3rem] lg:py-[6rem]`}>
					<h3 className={`lg:max-w-[75vw]`}>
						<span className={`${harlekin.className} text-primary text-3xl lg:text-5xl`}>
							{welcome.transform_ideas}
						</span>
						<br />
						<span className={`${impact.className} text-6xl lg:text-7xl`}>
							{welcome.digital_excellence}
						</span>
					</h3>
					<p className={`py-6 lg:max-w-[50vw]`}>
						{welcome.description}
					</p>
					<div className={`${impact.className} grid grid-cols-1 w-fit max-w-[75vw] gap-3 md:grid-cols-2 md:gap-6`}>
						<Link
							href={general.contact}
							title={general.title}
							prefetch={true}
							target={`_blank`}
							className={`group`}
						>
							<Button
								className={`cursor-pointer rounded-none border-2 border-primary p-6 text-base text-background dark:border-primary group-hover:scale-110`}
							>
								{terms.lets_collaborate}
							</Button>
						</Link>
						<Link
							href={`#connect`}
							title={terms.connect}
							prefetch={true}
							target={`_`}
							className={`group`}
						>
							<Button
								className={`cursor-pointer rounded-none border-2 border-foreground p-6 text-base text-foreground dark:border-foreground group-hover:scale-110`}
								variant={`outline`}
							>
								{terms.lets_connect}
							</Button>
						</Link>
					</div>
					<div className={`w-full h-[2px] my-9 bg-foreground lg:max-w-[30vw] lg:my-12`} />
					<div className={`grid grid-cols-2 gap-4 lg:max-w-[30vw] lg:gap-12`}>
						{counters.data.map((itm) => (
							<CardCounter
								key={itm.id}
								countTo={itm.counter}
								duration={500}
								prefix={itm.prefix}
								suffix={itm.suffix}
								title={itm.title}
							/>
						))}
					</div>
				</div>
				<div className={`bg-[url(/assets/png/photo/interdisciplinary-thinking.png)] w-full h-full min-h-[45vh] bg-cover bg-position-[30%_top] lg:min-h-[75vh]`} />
			</div>
		</PageSectionLayout>
	)
}
