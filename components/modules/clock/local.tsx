"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { impact } from "@/lib/fonts"
import { general, terms } from "@/locales/en"

export default function ClockLocal({
	className
} : {
	className?: string
}) {
	const [time, setTime] = useState<Date | null>(null)
	const [mounted, setMounted] = useState<boolean>(false)

	const formatTime = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			timeZone: general.timeZone,
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
		setMounted(true)
		setTime(new Date())
		
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)
	
		return () => clearInterval(timer)
	}, [])

	if (!mounted || !time) {
		return (
			<div className={cn(className)}>
				<div className={`flex ml-auto items-center content-center align-middle font-extrabold text-primary text-xs lg:text-sm`}>
					{general.time}
				</div>
				<div className={`${impact.className} flex ml-auto items-center content-center align-middle`}>
					<div className="grid grid-cols-[1.5rem_auto_1.5rem_auto_1.5rem_auto] w-fit items-center content-center align-middle text-sm lg:text-lg">
						<span className="flex mx-auto items-center content-center align-middle tabular-nums">
							{`00`}
						</span>
						<span className="flex mx-auto items-center content-center align-middle animate-pulse">
						:
						</span>
						<span className="flex mx-auto items-center content-center align-middle tabular-nums">
							{`00`}
						</span>
						<span className="flex mx-auto items-center content-center align-middle animate-pulse">
						:
						</span>
						<span className="flex mx-auto items-center content-center align-middle tabular-nums">
							{`00`}
						</span>
						<span className="flex mx-auto items-center content-center align-middle">
							{`AM`}
						</span>
					</div>
					<div className="grid grid-cols-[auto_1fr_auto] w-fit items-center content-center align-middle text-sm lg:text-lg">
						<span className={`px-1 flex items-center content-center align-middle`}>
							|
						</span>

						<span className={`flex items-center content-center align-middle`}>
							{`${terms.loading}...`}
						</span>
					</div>
				</div>
			</div>
		)
	}

	const { hours, minutes, seconds, period } = getTimeComponents(time ? time : new Date())

	return (
		<div className={cn(className)}>
			<div className={`flex ml-auto items-center content-center align-middle font-extrabold text-primary text-xs lg:text-sm`}>
				{general.time}
			</div>
			<div className={`${impact.className} flex ml-auto items-center content-center align-middle`}>
				<div className="grid grid-cols-[1.5rem_auto_1.5rem_auto_1.5rem_auto] w-fit items-center content-center align-middle text-sm lg:text-lg">
					<span className="flex mx-auto items-center content-center align-middle tabular-nums">
						{hours}
					</span>
					<span className="flex mx-auto items-center content-center align-middle animate-pulse">
					:
					</span>
					<span className="flex mx-auto items-center content-center align-middle tabular-nums">
						{minutes}
					</span>
					<span className="flex mx-auto items-center content-center align-middle animate-pulse">
					:
					</span>
					<span className="flex mx-auto items-center content-center align-middle tabular-nums">
						{seconds}
					</span>
					<span className="flex mx-auto items-center content-center align-middle">
						{period}
					</span>
				</div>
				<div className="grid grid-cols-[auto_1fr_auto] w-fit items-center content-center align-middle text-sm lg:text-lg">
					<span className={`px-1 flex items-center content-center align-middle`}>
						|
					</span>

					<span className={`flex items-center content-center align-middle`}>
						{time ? (
							time.toLocaleDateString("en-US", {
								timeZone: "Asia/Singapore",
								weekday: "short",
								month: "short",
								day: "numeric"
							})
						) : (
							`${terms.loading}...`
						)}
					</span>
				</div>
			</div>
		</div>
	)
}
