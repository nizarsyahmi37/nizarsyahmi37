import { FaTelegramPlane, FaInstagram, FaFacebookF, FaGithub, FaLinkedin, FaPinterest, FaYoutube, FaRedditAlien, FaTiktok } from "react-icons/fa"
import { FaMedium, FaPatreon, FaXTwitter } from "react-icons/fa6"
import { ExternalLink } from "lucide-react"
import { general } from "@/locales/en"
import { harlekin } from "@/lib/fonts"

import Image from "next/image"
import Link from "next/link"
import ClockLocal from "../../clock/local"
import ButtonMode from "../../button/mode"
import profile from "@/public/assets/png/photo/profile.png"
import revoluzion from "@/public/assets/webp/logo/revoluzion.webp"
import fractionax from "@/public/assets/webp/logo/fractionax.webp"
import houseofbytez from "@/public/assets/webp/logo/houseofbytez.webp"

export default function ViewProfile() {
	return (
		<div className={`grid grid-cols-1 gap-4 items-center align-middle justify-center`}>
			<div className={`grid grid-cols-[auto_1fr] gap-3 px-0 py-0 border-0 border-transparent border-b-2 border-b-foreground bg-background`}>
				<ButtonMode
					className={`z-[210] w-full h-full`}
				/>
				<ClockLocal
					className={`px-3 grid grid-rows-[auto_1fr] h-fit items-center align-middle content-center my-auto`}
				/>
			</div>
			<div className={`p-4 grid grid-cols-1 gap-4 max-w-[500px] mx-auto align-middle items-center justify-center`}>
				<Image
					width={profile.width / 4}
					height={profile.height / 4}
					src={profile.src}
					alt={`${general.title} | ${general.description}`}
					className={`p-3 w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out`}
				/>
				<div className={`grid gap-1`}>
					<h2 className={`text-2xl text-center font-bold`}>
						Nizar Syahmi bin Nazlan
					</h2>
					<h3 className={`${harlekin.className} text-2xl items-center text-center text-primary`}>
						{general.description}
					</h3>
				</div>
				<h3 className={`text-lg text-center font-bold mt-10`}>
					Let&apos;s connect & collaborate
				</h3>
				<div className={`h-1 border-foreground border-t-2 my-2`} />
				<div className={`py-4 w-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 align-middle items-center justify-center max-w-[75vw] mx-auto`}>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://x.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaXTwitter className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							X
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://instagram.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaInstagram className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Instagram
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://facebook.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaFacebookF className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Facebook
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://github.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaGithub className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Github
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://linkedin.com/in/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaLinkedin className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							LinkedIn
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://t.me/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaTelegramPlane className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Telegram
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://medium.com/@nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaMedium className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Medium
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://youtube.com/@nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaYoutube className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Youtube
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://pinterest.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaPinterest className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Pinterest
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://patreon.com/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaPatreon className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Patreon
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://reddit.com/u/nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaRedditAlien className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Reddit
						</p>
					</Link>
					<Link
						className={`w-fit gap-1 grid items-center content-center align-middle justify-center group grid items-center align-middle justify-center hover:text-primary`}
						href={"https://tiktok.com/@nizarsyahmi37"}
						title={`${general.title} | ${general.description}`}
						prefetch={true}
					>
						<FaTiktok className={`mx-auto w-8 h-8 group-hover:scale-110`} />
						<p className={`text-center text-xs font-semibold group-hover:scale-105`}>
							Tiktok
						</p>
					</Link>
				</div>
				<h3 className={`text-lg text-center font-bold mt-10`}>
					My affiliation
				</h3>
				<div className={`h-1 border-foreground border-t-2 my-2`} />
				<div className={`py-4 w-full grid gap-8 align-middle items-center max-w-[75vw] mx-auto`}>
					<div className={`grid grid-cols-[90px_1fr] gap-4 w-full`}>
						<Image
							width={revoluzion.width / 4}
							height={revoluzion.height / 4}
							src={revoluzion.src}
							alt={`Revoluzion | Your One-Stop Blockchain Solutions Provider`}
							className={`p-3 w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out`}
						/>
						<div>
							<h2 className={`font-bold text-lg`}>
								Revoluzion
							</h2>
							<p className={`font-light text-sm`}>
								Your One-Stop Blockchain Solutions Provider
							</p>
							<div className={`py-4 w-full flex gap-4`}>
								<Link
									className={`flex gap-2 align-middle items-center w-fit group hover:text-primary`}
									href={"https://revoluzion.io"}
									title={`Revoluzion | Your One-Stop Blockchain Solutions Provider`}
									prefetch={true}
								>
									<p className={`text-sm font-semibold group-hover:scale-105`}>
										Website
									</p>
									<ExternalLink className={`mx-auto w-4 h-4 group-hover:scale-110`} />
								</Link>
								<Link
									className={`flex gap-2 align-middle items-center w-fit group hover:text-primary`}
									href={"https://revoluzion.app"}
									title={`Revoluzion | Your One-Stop Blockchain Solutions Provider`}
									prefetch={true}
								>
									<p className={`text-sm font-semibold group-hover:scale-105`}>
										dApp
									</p>
									<ExternalLink className={`mx-auto w-4 h-4 group-hover:scale-110`} />
								</Link>
							</div>
						</div>
					</div>
					<div className={`grid grid-cols-[90px_1fr] gap-4 w-full`}>
						<Image
							width={fractionax.width / 4}
							height={fractionax.height / 4}
							src={fractionax.src}
							alt={`Fractionax | Own a Piece of Premium Assets From Just $1`}
							className={`p-3 w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out`}
						/>
						<div>
							<h2 className={`font-bold text-lg`}>
								Fractionax
							</h2>
							<p className={`font-light text-sm`}>
								Own a Piece of Premium Assets From Just $1
							</p>
							<div className={`py-4 w-full flex gap-4`}>
								<Link
									className={`flex gap-2 align-middle items-center w-fit group hover:text-primary`}
									href={"https://fractionax.app"}
									title={`Fractionax | Own a Piece of Premium Assets From Just $1`}
									prefetch={true}
								>
									<p className={`text-sm font-semibold group-hover:scale-105`}>
										Website
									</p>
									<ExternalLink className={`mx-auto w-4 h-4 group-hover:scale-110`} />
								</Link>
							</div>
						</div>
					</div>
					<div className={`grid grid-cols-[90px_1fr] gap-4 w-full`}>
						<Image
							width={houseofbytez.width / 4}
							height={houseofbytez.height / 4}
							src={houseofbytez.src}
							alt={`House of Bytez | A collective of builders, strategists, and innovators`}
							className={`p-3 w-[12rem] h-auto mx-auto py-3 transition duration-300 ease-in-out`}
						/>
						<div>
							<h2 className={`font-bold text-lg`}>
								House of Bytez
							</h2>
							<p className={`font-light text-sm`}>
								A collective of builders, strategists, and innovators
							</p>
							<div className={`py-4 w-full flex gap-4`}>
								<Link
									className={`flex gap-2 align-middle items-center w-fit group hover:text-primary`}
									href={"https://houseofbytez.com"}
									title={`House of Bytez | A collective of builders, strategists, and innovators`}
									prefetch={true}
								>
									<p className={`text-sm font-semibold group-hover:scale-105`}>
										Website
									</p>
									<ExternalLink className={`mx-auto w-4 h-4 group-hover:scale-110`} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
