import { NextResponse } from "next/server";

export function proxy(request) {
    // console.log("Proxy executed for:", request.nextUrl.pathname);
    // const response = request.nextUrl.pathname === "/login"
    //     ? NextResponse.next()
    //     : NextResponse.redirect(new URL("/login", request.url));

    // response.headers.set("x-proxy-working", "yes");
    // return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
