import { cn } from "@/lib/utils"
import { harlekin } from "@/lib/fonts"
import { general } from "@/locales/en"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"
import ClockLocal from "../../clock/local"
import SheetNavigation from "../sheet/navigation"
import lettermarkLight from "@/public/assets/png/logo/full/light/fit/nizarsyahmi37-lettermark.png"
import lettermarkDark from "@/public/assets/png/logo/full/dark/fit/nizarsyahmi37-lettermark.png"

export default function Header({
	className
} : {
	className?: string
}) {
	return (
		<header className={cn(
			`grid grid-cols-[1fr_3.6rem] gap-3 px-3 py-0 border-0 border-transparent border-b-2 border-b-foreground bg-background lg:px-6 lg:py-3 lg:grid-cols-[1fr_auto]`,
			className
		)}>
			<div className={`${harlekin.className} hidden text-2xl items-center text-primary lg:grid`}>
				{general.description}
			</div>
			<ClockLocal className={`hidden h-fit items-center align-middle content-center my-auto lg:grid lg:grid-rows-[auto_1fr]`} />
			<div className={`grid mr-auto lg:hidden`}>
				<Button
					className={`z-[210] w-full h-full px-3 py-1`}
					variant={`transparent`}
					asChild
				>
					<Link
						className={`grid items-center content-center align-middle justify-center group`}
						href={"/"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<Image
							width={lettermarkLight.width / 4}
							height={lettermarkLight.height / 4}
							src={lettermarkLight.src}
							alt={`${general.title} | ${general.description}`}
							className={`hidden w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out group-hover:scale-110 dark:block`}
						/>
						<Image
							width={lettermarkDark.width / 4}
							height={lettermarkDark.height / 4}
							src={lettermarkDark.src}
							alt={`${general.title} | ${general.description}`}
							className={`block w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out group-hover:scale-110 dark:hidden`}
						/>
					</Link>
				</Button>
			</div>
			<div className={`grid ml-auto lg:hidden`}>
				<SheetNavigation
					className={`z-[209] grid items-center content-center align-middle justify-center group`}
				/>
			</div>
		</header>
	)
}
