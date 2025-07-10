import ViewHomeSectionWelcome from "./section/welcome"
import ViewHomeSectionServices from "./section/services"
import ViewHomeSectionNews from "./section/news"
import ViewHomeSectionFaqs from "./section/faqs"
import ViewHomeSectionAbout from "./section/about"

export default function ViewHome() {
	return (
		<div>
			<ViewHomeSectionWelcome />
			<ViewHomeSectionAbout />
			<ViewHomeSectionServices />
			<ViewHomeSectionNews />
			<ViewHomeSectionFaqs />
		</div>
	)
}
