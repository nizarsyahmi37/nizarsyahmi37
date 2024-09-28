"use client"

import { content } from "@/lib/i18n"
import { usePathname } from "next/navigation"

export default function CountryPage() {
	const pathname = usePathname()
	const ticker = pathname.split("/")?.[1]
	const locale = ticker === "" ? "en" : ticker
	const dictionary = content[locale as keyof typeof content] || content.en

	return (
		<div>
			<p>
				{locale}
			</p>
			<p>
				{dictionary.greet}
			</p>
		</div>
	)
}