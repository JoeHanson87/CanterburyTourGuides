import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  // Allow unauthenticated access to /login
  if (req.nextUrl.pathname === '/login') {
    return NextResponse.next()
  }
})

export const config = {
  matcher: ['/admin/:path*'],
}
