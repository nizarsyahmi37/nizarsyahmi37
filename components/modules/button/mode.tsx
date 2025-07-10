"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ButtonMode({
	className
} : {
	className?: string
}) {
	const {setTheme} = useTheme()
	
	return (
		<Button
			className={cn(className)}
			variant={`transparent`}
			asChild
		>
			<div className={`min-w-[3rem] min-h-[3rem] group cursor-pointer grid items-center align-middle content-center justify-center lg:min-w-[4.5rem] lg:min-h-[4.5rem] `}>
				<div className={`w-full h-full hidden items-center align-middle content-center justify-center dark:block`} onClick={() => setTheme("light")}>
					<Sun className={`mx-auto scale-150 transition duration-300 ease-in-out lg:scale-175 group-hover:scale-250 group-hover:rotate-12`} />
				</div>
				<div className={`w-full h-full block items-center align-middle content-center justify-center dark:hidden`} onClick={() => setTheme("dark")}>
					<Moon className={`mx-auto scale-150 transition duration-300 ease-in-out lg:scale-175 group-hover:scale-250 group-hover:rotate-12`} />
				</div>
			</div>
		</Button>
	)
}
