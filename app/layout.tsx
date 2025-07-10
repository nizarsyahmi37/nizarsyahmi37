import type { Metadata } from "next"
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/modules/theme"
import { open_sans } from "@/lib/fonts"

import MainLayout from "@/components/modules/layout/main"

import "./globals.css"

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
					<MainLayout>
						{children}
					</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	)
}
