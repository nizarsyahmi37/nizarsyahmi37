import { ReactNode } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

import Sidebar from "../general/sidebar"
import Header from "../general/header"
import Footer from "../general/footer"

export default function MainLayout({
	children
}: {
	children: ReactNode
}) {
	return (
		<div className={`h-[100vh] grid grid-cols-1 grid-rows-1 lg:grid-cols-[4.5rem_1fr]`}>
			<Sidebar className={`z-[999] bg-background hidden max-w-[4.5rem] border-0 border-transparent border-r-2 border-r-foreground lg:grid`} />
			<ScrollArea className={`w-full h-full`}>
				<Header className={`z-[30] sticky top-0 bg-background`} />
				<main>
					{children}
				</main>
				<Footer />
			</ScrollArea>
		</div>
	)
}
