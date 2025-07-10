"use client"

import { cn } from "@/lib/utils"
import { impact } from "@/lib/fonts"
import { useEffect, useRef, useState } from "react"

import Link from "next/link"

export const CardMovingSocials = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className
}: {
	items: {
		id: string
		title: string
		link: string
	}[]
	direction?: "left" | "right"
	speed?: "fast" | "normal" | "slow"
	pauseOnHover?: boolean
	className?: string
}) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollerRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		addAnimation()
	}, [])
	
	const [start, setStart] = useState(false)
	
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
				"--animation-direction",
				"forwards",
				)
			} else {
				containerRef.current.style.setProperty(
				"--animation-direction",
				"reverse",
				)
			}
		}
	}

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "6s")
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "18s")
			} else {
				containerRef.current.style.setProperty("--animation-duration", "54s")
			}
		}
	}

  return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-full overflow-hidden",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item) => (
					<Link
						href={item.link}
						key={item.id}
						target={`_blank`}
						title={item.title}
						prefetch={true}
					>
						<li
							className={`${impact.className} text-4xl text-background grid items-center align-middle content-center justify-center relative min-w-[320px] max-w-full shrink-0 border-y-2 border-x-1 border-background p-6 transition-all ease-in-out duration-300 lg:min-w-[450px] hover:bg-background hover:text-foreground hover:border-primary hover:border-2`}
						>
							{item.title}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
