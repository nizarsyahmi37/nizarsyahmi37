import { NextRequest, NextResponse } from "next/server"

export const config = {
	matcher: "/",
}

export default function middleware(req: NextRequest) {
	const locale = req.headers.get("accept-language")?.split(",")?.[0] || "cn"

	req.nextUrl.pathname = `/${locale}`
	return (
		NextResponse.rewrite(req.nextUrl)
	)
}
