import { cn } from "@/lib/utils"
import { general } from "@/locales/en"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import SheetNavigation from "../sheet/navigation"
import ButtonMode from "../../button/mode"
import lettermarkLight from "@/public/assets/png/logo/full/light/fit/nizarsyahmi37-lettermark-vertical.png"
import lettermarkDark from "@/public/assets/png/logo/full/dark/fit/nizarsyahmi37-lettermark-vertical.png"

export default function Sidebar({
	className
} : {
	className?: string
}) {
	return (
		<aside className={cn(className, "grid-rows-[auto_1fr_auto]")}>
			<Button
				className={`z-[210] w-full h-full col-start-1 col-end-2 row-start-1 row-end-2`}
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
						className={`hidden w-auto h-[12rem] mx-auto py-3 transition duration-300 ease-in-out group-hover:scale-110 dark:block`}
					/>
					<Image
						width={lettermarkDark.width / 4}
						height={lettermarkDark.height / 4}
						src={lettermarkDark.src}
						alt={`${general.title} | ${general.description}`}
						className={`block w-auto h-[12rem] mx-auto py-3 transition duration-300 ease-in-out group-hover:scale-110 dark:hidden`}
					/>
				</Link>
			</Button>
			<SheetNavigation
				className={`z-[209] col-start-1 col-end-2 row-start-1 row-end-4 grid items-center content-center align-middle justify-center group`}
			/>
			<ButtonMode
				className={`z-[210] p-0 w-full h-full col-start-1 col-end-2 row-start-3 row-end-4`}
			/>
		</aside>
	)
}
