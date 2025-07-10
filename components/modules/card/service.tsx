import { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CardService({
	children,
	className
} : {
	children: ReactNode
	className?: string
}) {
	return (
		<Card className={cn(className, `rounded-none p-3`)}>
			{children}
		</Card>
	)
}
