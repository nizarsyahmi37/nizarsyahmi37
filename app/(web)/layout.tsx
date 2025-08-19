import type { Metadata } from "next"
// import { StackProvider, StackTheme } from "@stackframe/stack";
// import { stackServerApp } from "../../stack";
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/modules/theme"
import { open_sans } from "@/lib/fonts"

import MainLayout from "@/components/modules/layout/main"

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
				{/* <StackProvider app={stackServerApp}><StackTheme> */}
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<MainLayout>
						{children}
					</MainLayout>
				</ThemeProvider>
				{/* </StackTheme></StackProvider> */}
			</body>
		</html>
	)
}
