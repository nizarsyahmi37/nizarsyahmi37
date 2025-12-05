"use client"

import { useEffect } from "react"

export default function AdSense(slot: string) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const script = document.createElement("script")
			script.async = true
			script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
			script.setAttribute("data-ad-client", "ca-pub-5978608662480516")
			document.head.appendChild(script)
		}
	}, [])

	return (
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-client="ca-pub-5978608662480516"
			data-ad-slot={slot}
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	);
}
