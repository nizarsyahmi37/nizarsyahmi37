import { general, home, terms } from "@/locales/en"
import { harlekin, impact } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import Image from "next/image"
import PageSectionLayout from "@/components/modules/layout/page/section"
import knowledgeCity from "@/public/assets/png/photo/knowledge-city.png"
import AdSense from "@/components/modules/google/ads"

const about = home.about

export default function ViewHomeSectionAbout() {
	return (
		<PageSectionLayout
			title={about.about}
			sectionId={about.about.toLowerCase()}
			index={about.index}
			totalIndex={home.totalIndex}
			className={`bg-background min-h-[calc(100vh-4.5rem)] w-auto`}
		>
			<div className={`relative min-h-[calc(100vh-4.5rem)] -my-1 min-w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:my-0 lg:-mx-1`}>
				<div className={`bg-background border-y-1 border-x-0 border-foreground lg:border-y-0 lg:border-x-1 lg:top-[7.5rem] lg:sticky`}>
					<h3 className={`${harlekin.className} text-primary leading-none px-3 py-6 mt-6 text-6xl lg:text-8xl`}>
						{general.knowledge_is_power}
					</h3>
					<p className={`px-6 w-[90%] max-w-[60rem] lg:mx-1`}>
						{about.description}
					</p>
					<div className={`my-12 max-h-[15rem] overflow-clip flex items-center`}>
						<Image
							width={knowledgeCity.width}
							height={knowledgeCity.height}
							src={knowledgeCity.src}
							alt={`${general.knowledge_is_power}`}
							className={`w-full`}
						/>
					</div>
					<h3 className={`${harlekin.className} mb-12 z-[9] sticky top-[6.5rem] leading-none px-3 py-6 mt-6 text-6xl lg:text-8xl lg:top-[8.1rem]`}>
						{about.my_approach}
					</h3>
					<div className={`relative grid grid-cols-2 -m-[1px] mt-[45vh]`}>
						{about.approach.data.map((itm) => (
							<div
								key={itm.id}
								className={cn(
									`sticky z-[10] bg-background -m-[1px] mt-[25vh] border-2 border-foreground min-h-[25vh]`,
									itm.id === "discover" && `col-start-1 row-start-1 top-[6.75rem] lg:top-[18rem]`,
									itm.id === "deliver" && `col-start-2 row-start-4 top-[6.75rem] lg:top-[calc(25vh+18rem-2px)]`,
									itm.id === "collaborate" && `col-start-2 row-start-2 top-[6.75rem] lg:top-[18rem]`,
									itm.id === "iterate" && `col-start-1 row-start-3 top-[6.75rem] lg:top-[calc(25vh+18rem-2px)]`
								)}
							>
								<div className={`h-full grid grid-rows-[auto_1fr]`}>
									<h4 className={`px-3 pt-6 text-4xl flex flex-col gap-0 items-center align-middle content-center lg:flex-row lg:gap-2`}>
										<span className={`${impact.className} pl-3`}>
											{itm.step}
										</span>
										<span className={`${harlekin.className} text-2xl text-primary lg:text-3xl`}>
											{itm.title}
										</span>
									</h4>
									<p className={`p-6 grid items-end lg:px-7`}>
										{itm.description}
									</p>
								</div>
							</div>
						))}
					</div>
					
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
					<AdSense
						slot={"7875349492"}
					/>
				</div>
			</div>
		</PageSectionLayout>
	)
}
