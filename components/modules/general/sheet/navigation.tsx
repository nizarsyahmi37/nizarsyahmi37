import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { general, navigation } from "@/locales/en"
import { harlekin, impact } from "@/lib/fonts"

import Link from "next/link"
import ClockLocal from "../../clock/local"
import ButtonMode from "../../button/mode"

export default function SheetNavigation({
	className
} : {
	className?: string
}) {
	return (
		<Sheet>
			<SheetTrigger
				className={cn(className)}
				asChild
			>
				<Button
					className={`w-full h-full cursor-pointer group`}
					variant={`transparent`}
				>
					<svg className="w-6 h-6 scale-150 fill-current pointer-events-none group-hover:scale-200" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<rect className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:translate-x-0 group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:rotate-[315deg]" y="7" width="9" height="2" rx="1"></rect>
						<rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-expanded=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
						<rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:rotate-[135deg]" y="7" width="9" height="2" rx="1"></rect>
					</svg>
				</Button>
			</SheetTrigger>
			<SheetContent
				className={`min-w-[36vw]`}
				side={`left`}
			>
				<SheetClose
					className={`w-full h-full cursor-pointer grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-rows-1`}
				>
					<SheetTitle className={`${harlekin.className} min-h-[3.75rem] font-normal border-foreground text-primary p-3 lg:py-6 text-xl grid lg:hidden`}>
						{`${general.description}`}
					</SheetTitle>
					<div className={`w-full h-full grid grid-cols-1 justify-between lg:pl-[4.5rem]`}>
						{navigation.main.map((itm) => (
							<SheetClose
								key={itm.id}
								className={`${impact.className} z-[10] py-1 w-full grid grid-cols-1 items-center align-middle content-center justify-center border-y-1 border-foreground cursor-pointer group text-lg lg:text-3xl 2xl:text-6xl hover:text-primary first:border-t-2 last:border-b-2`}
								asChild
								>
								<Link
									href={itm.link}
									title={itm.title}
									className={`w-full h-full`}
									prefetch={true}
								>
									<p className={`group-hover:-rotate-6`}>
										{itm.title}
									</p>
								</Link>
							</SheetClose>
						))}
					</div>
					<SheetFooter className={`grid grid-cols-[auto_1fr] border-foreground lg:hidden`}>
						<ButtonMode
							className={`z-[210] w-full h-full`}
						/>
						<ClockLocal
							className={`grid grid-rows-[auto_1fr] h-fit items-center align-middle content-center my-auto`}
						/>
					</SheetFooter>
				</SheetClose>
			</SheetContent>
		</Sheet>
	)
}
