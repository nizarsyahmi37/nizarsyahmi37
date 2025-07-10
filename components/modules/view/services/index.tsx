import { impact } from "@/lib/fonts"

export default function ViewServices() {
	return (
		<div>
			<section className={`h-screen relative`}>
				<div className={`${impact.className} p-3 sticky border-y-2 border-foreground top-[4.5rem] -mt-[2px] grid grid-cols-2 items-center content-center align-middle`}>
					<div className={`text-start`}>
						Services
					</div>
					<div className={`text-end`}>
						<span className={`text-primary`}>02</span> / 08
					</div>
				</div>
			</section>

			<br /><br /><br /><br />

			<section id="therapien" className="bg-primary flex-col justify-start items-start flex relative">
				<div className="h-[calc(100%+3px)] z-[119] w-0 absolute top-0">
					<div className="border-b-2 border-foreground bg-background origin-[50%_0] justify-between items-center w-[100vw] h-[2.4rem] flex sticky top-[60px] right-0">
						<div className="sectionbar-inner">
							<div className="sectionbar-current">Therapien</div>
							<div className="sectionbar-counterbox">
								<div className="sectionbar-counter current-c">04</div>
								<div className="sectionbar-counter"> &nbsp;/ 08</div>
							</div>
						</div>
					</div>
				</div>
				<div className="therapien-hl-box">
					<h2 id="thera-split" className="headline-mega therapien slide-up splittext hll1">
						<span className="splitword">
							{/* <span className="letter" style="transform: translateY(0em) translateZ(0px);">D</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">i</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">e</span> */}
						</span>
					</h2>
					<h2 className="headline-mega therapien slide-up splittext">
						<span className="splitword">
							{/* <span className="letter" style="transform: translateY(0em) translateZ(0px);">T</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">h</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">e</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">r</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">a</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">p</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">i</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">e</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">n</span>
							<span className="letter" style="transform: translateY(0em) translateZ(0px);">:</span> */}
						</span>
					</h2>
				</div>
				<div className="therapien-card-wrapper">
					<div className="therapien-card-list">
						<div className="therapien-card card1">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Osteopathie</h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Ganzheitliche Methode zur Wiederherstellung der Mobilität des Körpers</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">01</div>
							</div>
						</div>
						<div className="therapien-card card2">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Manuelle <br />Therapie <br /></h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Behandlung von Funktionsstörungen des Bewegungsapparats</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">02</div>
							</div>
						</div>
						<div className="therapien-card card3">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Faszien- <br />behandlung </h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Gezielte Behandlungsform für das bindegewebige Fasziensystem</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">03</div>
							</div>
						</div>
						<div className="therapien-card card4">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Weichteil- <br />techniken </h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Dehn- und Entspannungstechniken im Bereich der Muskulatur</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">04</div>
							</div>
						</div>
						<div className="therapien-card card5">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Medizinische Trainingstherapie</h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Gezieltes körperliches Rehabilitations- &amp; Präventionstraining </div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">05</div>
							</div>
						</div>
						<div className="therapien-card card6">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Heilgymnastik <br />
								</h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Physiotherapeutische Bewegungstherapie</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">06</div>
							</div>
						</div>
						<div className="therapien-card card7">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Cranio Sacrale Therapie</h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Sanfte Griffe zur Aktivierung der Selbstheilungskräfte des Körpers</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">07</div>
							</div>
						</div>
						<div className="therapien-card card8">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Viszerale <br />Therapie <br /></h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Behandlung bei Störungen des Bewegungsapparates in Verbindung mit dem Organsystem</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">08</div>
							</div>
						</div>
						<div className="therapien-card card9">
							<div className="therapien-card-info">
								<h2 className="therapien-card-hl">Taping <br />
								</h2>
								<div className="therapien-card-line"></div>
								<div className="therapien-card-txt">Stützverbände und Kinesio Taping</div>
							</div>
							<div className="therapien-card-counter-box">
								<div className="therapien-ball"></div>
								<div className="therapien-card-nr">09</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}