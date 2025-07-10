"use client"

import { impact } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export default function CardCounter({
	countTo = 0,
	duration = 1500,
	prefix,
	suffix,
	title,
	className
} : {
	countTo?: number
	duration?: number
	prefix?: string
	suffix?: string
	title?: string
	className?: string
}) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const incrementInterval = duration / countTo

		const interval = setInterval(() => {
			setCount(prevCount => {
				if (prevCount >= countTo) {
					clearInterval(interval)
					return countTo
				}
				return prevCount + 1
			})
		}, incrementInterval)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={cn(`flex items-center justify-center`, className)}>
			<div className={`text-center`}>
				<h1 className={`${impact.className} text-5xl font-bold text-primary mb-2`}>
					{prefix}{count}{suffix}
				</h1>
				<p className={``}>
					{title}
				</p>
			</div>
		</div>
	)
}
