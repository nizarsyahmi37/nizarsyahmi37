import { BrainCircuit, BriefcaseBusiness, Code2, Gamepad2, Palette, PencilLine, Users2 } from "lucide-react"

export const general = {
	establishYear: "2019",
	currentYear: "2025",
	title: "NizarSyahmi37",
	description: "Designer, Programmer, Strategist, Writer",
	email: "hello@nizarsyahmi37.com",
	time: "Local time — GMT +7",
	timeZone: "+07:00",
	knowledge_is_power: "Knowledge is Power",
	contact: "https://t.me/nizarsyahmi37"
}

export const terms = {
	loading: "Loading",
	connect: "Connect",
	rights_reserved: "All rights reserved",
	lets_collaborate: "Let's collaborate",
	lets_connect: "Let's connect",
	this_section: "This section",
	update_in_progress: "Update in progress",
	we_are_upgrading: "We are upgrading",
	to_serve_you_better: "To serve you better"
}

export const navigation = {
	main: [
		{
			id: "home",
			title: "Home",
			link: "/#",
			type: "internal",
			icon: null
		},
		{
			id: "about",
			title: "About",
			link: "/#about",
			type: "internal",
			icon: null
		},
		{
			id: "services",
			title: "Services",
			link: "/#services",
			type: "internal",
			icon: null
		},
		{
			id: "news",
			title: "News",
			link: "/#news",
			type: "internal",
			icon: null
		},
		{
			id: "faqs",
			title: "FAQs",
			link: "/#faqs",
			type: "internal",
			icon: null
		}
	]
}

export const socials = {
	data: [
		{
			id: "telegram",
			title: "Telegram",
			link: "https://t.me/nizarsyahmi37"
		},
        {
            id: "x",
            title: "X",
            link: "https://x.com/nizarsyahmi37"
        },
        {
            id: "instagram",
            title: "Instagram",
            link: "https://instagram.com/nizarsyahmi37"
        },
        {
            id: "github",
            title: "Github",
            link: "https://github.com/nizarsyahmi37"
        },
        {
            id: "pinterest",
            title: "Pinterest",
            link: "https://pinterest.com/nizarsyahmi37"
        },
		{
			id: "medium",
			title: "Medium",
			link: "https://nizarsyahmi37.medium.com/"
		},
        {
            id: "youtube",
            title: "Youtube",
            link: "https://youtube.com/nizarsyahmi37"
        }
	]
}

export const counters = {
	data: [
		{
			id: "domains",
			title: "domains expertise",
			counter: 7,
			prefix: "",
			suffix: ""
		},
		{
			id: "experience",
			title: "years of experience",
			counter: 11,
			prefix: "",
			suffix: ""
		},
		{
			id: "solutions",
			title: "solutions delivered",
			counter: 246,
			prefix: "",
			suffix: "+"
		},
		{
			id: "collaborations",
			title: "successful collaboration",
			counter: 630,
			prefix: "",
			suffix: "+"
		},
	]
}

export const home = {
	totalIndex: "05",
	welcome: {
		index: "01",
		welcome: "Welcome",
		transform_ideas: "Transform Ideas Into",
		digital_excellence: "Digital Excellence",
		description: "Every breakthrough begins with a single idea. Let's take your vision and transform it through strategic thinking, innovative design, and precise execution. From initial concept to final delivery, let's create digital solutions that not only meet your goals but exceed your expectations."
	},
	about: {
		index: "02",
		about: "About",
		description: "I believe in the power of interdisciplinary thinking. By combining insights from design, technology, business, and creative pursuits, I create solutions that are not only functional but also meaningful and impactful. Every project is an opportunity to learn, grow, and make a positive difference.",
		my_approach: "My approach",
		approach: {
			data: [
				{
					id: "discover",
					step: "01",
					title: "Discover",
					description: "Listen deeply to understand not just what you need, but why you need it before asking questions to uncover hidden opportunities"
				},
				{
					id: "collaborate",
					step: "02",
					title: "Collaborate",
					description: "Work genuinely together — your expertise meets fresh perspective while keeping real people at the center of every solution"
				},
				{
					id: "iterate",
					step: "03",
					title: "Iterate",
					description: "Build, test, and refine through thoughtful experimentation while challenging assumptions and exploring possibilities"
				},
				{
					id: "deliver",
					step: "04",
					title: "Deliver",
					description: "Create outcomes that are both innovative and practical, addressing root causes while fitting your vision"
				}
			]
		}
	},
	services: {
		index: "03",
		services: "Services",
		coverage: <h4>Domain<br />coverage:</h4>,
		data: [
			{
				id: "design",
				title: "Design",
				description: "Creative visual solutions and user experience design for digital and print media",
				style: "z-[3] col-start-1 row-start-1 lg:col-start-1 lg:row-start-3",
				icon: <Palette />
			},
			{
				id: "code",
				title: "Code",
				description: "Custom software development and programming solutions for web and mobile applications",
				style: "z-[1] col-start-2 row-start-2 lg:col-start-2 lg:row-start-1",
				icon: <Code2 />
			},
			{
				id: "strategy",
				title: "Strategy",
				description: "Comprehensive planning and strategic guidance for business growth and market positioning",
				style: "z-[4] col-start-1 row-start-3 lg:col-start-3 lg:row-start-4",
				icon: <BrainCircuit />
			},
			{
				id: "writing",
				title: "Writing",
				description: "Professional content creation and copywriting services for various communication needs",
				style: "z-[2] col-start-2 row-start-4 lg:col-start-4 lg:row-start-2",
				icon: <PencilLine />
			},
			{
				id: "game",
				title: "Game",
				description: "Interactive entertainment development and gamification solutions for engaging experiences",
				style: "z-[5] col-start-1 row-start-5 lg:col-start-1 lg:row-start-5",
				icon: <Gamepad2 />
			},
			{
				id: "business",
				title: "Business",
				description: "Operational consulting and business process optimization for organizational efficiency",
				style: "z-[7] col-start-2 row-start-6 lg:col-start-2 lg:row-start-7",
				icon: <BriefcaseBusiness />
			},
			{
				id: "consult",
				title: "Consult",
				description: "Expert advisory services and specialized consultation across multiple industry domains",
				style: "z-[6] col-start-1 row-start-7 lg:col-start-4 lg:row-start-6",
				icon: <Users2 />
			}
		]
	},
	news: {
		index: "04",
		news: "News"
	},
	faqs: {
		index: "05",
		faqs: "FAQs",
		description: "Here are some of the most common questions we receive from clients and partners. If you have a question that isn't answered here, feel free to reach out directly.",
		frequently_asked: "Frequently Asked",
		data: [
			{
				id: "services",
				title: "What services do you offer?",
				description: "We provide tailored services in design (graphic & UI/UX), software and web/app development, strategy consulting (brand, product, go-to-market), and copywriting/content creation. Whether you need a complete solution or support in one area, we can help."
			},
			{
				id: "clientele",
				title: "Who do you typically work with?",
				description: "We work with startups, established businesses, personal brands, and agencies — especially those building innovative digital products or looking to stand out through strong branding and storytelling."
			},
			{
				id: "tools",
				title: "What tools or tech do you use?",
				description: "Our go-to tools include Figma, Adobe Creative Suite, and Next.js, React, TypeScript, Node.js for development. For strategy and writing, we rely on Notion, Miro, and SEO/content tools like Surfer and Hemingway."
			},
			{
				id: "time",
				title: "What's your typical turnaround time?",
				description: "It depends on the project scope. A logo design might take 3-5 days, a website 2-4 weeks, and strategy or writing deliverables can range between 3-10 days. We'll always give a timeline estimate before we start."
			},
			{
				id: "revisions",
				title: "How many revisions are included?",
				description: "Most packages include 2-3 rounds of revisions. We're flexible and collaborative — the goal is to get it right, but we'll set clear boundaries to avoid scope creep."
			},
			{
				id: "communication",
				title: "How do we communicate?",
				description: "We typically use email, Telegram, or Notion for async communication and Zoom or Google Meet for calls. We value clear, prompt communication — and expect the same from clients."
			},
			{
				id: "rates",
				title: "What are your rates?",
				description: "Rates depend on the complexity and timeline. We offer project-based pricing for clarity, and occasionally hourly rates for consulting or urgent tasks. We'll send a custom quote after understanding your needs."
			},
			{
				id: "contracts",
				title: "Do you provide contracts or invoices?",
				description: "Yes. We work with clear contracts, and provide invoices for all payments. A deposit (usually 30-50%) is required to start a project."
			},
			{
				id: "exclusions",
				title: "What don't you do?",
				description: "We don't take on projects without clear goals or unrealistic timelines. We also don't offer ongoing maintenance or support unless it's part of a defined scope."
			},
			{
				id: "retainer",
				title: "Can we work on a long-term basis?",
				description: "Absolutely. We love working as an ongoing collaborator or fractional team member for clients who want someone versatile and dependable across design, dev, strategy, and writing."
			},
			{
				id: "suitability",
				title: "How do I know you're the right fit?",
				description: "Let's chat. We don't believe in forcing a fit — if we're not right for your project, We'll be honest and may even refer you to someone better suited. But if you value quality, depth, and innovation, we'll likely click."
			},
		]
	}
}