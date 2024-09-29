import type { Metadata } from "next"
import { ReactNode } from "react"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "NizarSyahmi37",
	description: "Designer, Programmer, Strategist & Writer",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<svg className="pointer-events-none absolute cursor-none">
					<filter id="grainy">
						<feTurbulence 
							type="fractalNoise"
							baseFrequency="0.6"
							numOctaves="3"
							stitchTiles="stitch"
						/>
						<feColorMatrix 
							type="saturate"
							values="0"
						/>
					</filter>
				</svg>
				{children}
			</body>
		</html>
	)
}
