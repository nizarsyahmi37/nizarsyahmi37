import { impact } from "@/lib/fonts"
import { home, terms } from "@/locales/en"

import PageSectionLayout from "@/components/modules/layout/page/section"
import AdSense from "@/components/modules/google/ads"

const news = home.news

export default function ViewHomeSectionNews() {
	return (
		<PageSectionLayout
			title={news.news}
			sectionId={news.news.toLowerCase()}
			index={news.index}
			totalIndex={home.totalIndex}
			className={`bg-background`}
		>
			<div className={`${impact.className} grid min-h-[calc(50vh-3rem)] items-center align-middle content-center justify-center text-center text-[2.1rem] px-6 py-12 leading-none lg:text-[4.5rem]`}>
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
				slot={"7956892934"}
			/>
		</PageSectionLayout>
	)
}
