import type { Metadata } from "next"
// import { StackProvider, StackTheme } from "@stackframe/stack";
// import { stackServerApp } from "../../stack";
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/modules/theme"
import { open_sans } from "@/lib/fonts"

import "../globals.css"

export const metadata: Metadata = {
	title: "NizarSyahmi37",
	description: "Designer, Entrepreneur, Gamer, Programmer, Strategist & Writer"
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`${open_sans.className} font-medium antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
