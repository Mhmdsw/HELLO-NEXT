import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === '/admin') {
    console.log('🚫 Redirecting /admin to /about');
    return NextResponse.redirect(new URL('/about', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'Hello from Middleware!');
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};