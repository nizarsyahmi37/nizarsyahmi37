"use client"

import { impact } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { general, socials, terms } from "@/locales/en"
import { useEffect, useState } from "react"
import { ArrowUpRight, Copyright } from "lucide-react"
import { CardMovingSocials } from "../../card/moving-socials"

export default function Footer({
	className
} : {
	className?: string
}) {

	const [time, setTime] = useState<Date | null>(null)
	const [mounted, setMounted] = useState<boolean>(false)

	const formatTime = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			timeZone: "Asia/Singapore",
			year: "numeric",
			hour12: true,
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}
		
		return date.toLocaleTimeString("en-US", options)
	}

	const getTimeComponents = (date: Date) => {
		const timeString = formatTime(date)
		const [time, period] = timeString.split(" ")
		const [hours, minutes, seconds] = time.split(":")
		
		return { hours, minutes, seconds, period }
	}

	useEffect(() => {
		if (!mounted) {
			setMounted(true)
			setTime(new Date())
		}
	}, [mounted])

	return (
		<footer className={cn(
			`grid grid-rows-[auto_1fr_auto] bg-primary min-h-[30vh] group w-full lg:w-[calc(100vw-4.5rem)]`,
			className
		)}>
			<div id={`connect`} className={`p-6 grid grid-cols-[1fr_auto]`}>
				<h2 className={`${impact.className} text-background px-3 text-[3.9rem] lg:px-9 lg:text-[9rem]`}>
					{terms.connect}
				</h2>
				<ArrowUpRight className={`w-[3rem] h-[3rem] origin-top-right duration-500 lg:w-[9rem] lg:h-[9rem] group-hover:scale-150`} />
			</div>
			<div className="flex flex-col max-w-[100vw] antialiased items-center justify-center relative overflow-hidden lg:max-w-[100vw-4.5rem]">
				<CardMovingSocials
					items={socials.data}
					speed="slow"
				/>
			</div>
			<div className={`p-6 text-background font-semibold`}>
				<p className={`text-md flex flex-col gap-1 items-center justify-center align-middle content-center md:flex-row md:gap-2`}>
					<span className={`flex gap-2 items-center align-middle content-center`}>
						<Copyright className={`w-4 h-4`} /> {general.establishYear}–{time ? time.getFullYear() : general.currentYear} {general.title}
					</span>
					<span className={`hidden md:block`}>
						|
					</span>
					<span>
						{terms.rights_reserved}
					</span>
				</p>
			</div>
		</footer>
	)
}
