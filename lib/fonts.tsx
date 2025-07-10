import { Open_Sans } from "next/font/google"

import localFont from "next/font/local"

export const open_sans = Open_Sans({
	weight: ["300", "400", "500", "600", "700", "800"],
	subsets: [
		"latin"
	],
	display: "swap",
	preload: true
})

export const impact = localFont({
	src: "../public/assets/font/impact.woff",
	display: "swap",
	preload: true
})

export const harlekin = localFont({
	src: "../public/assets/font/harlekin.woff",
	display: "swap",
	preload: true
})