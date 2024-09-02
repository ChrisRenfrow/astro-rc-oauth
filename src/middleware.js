import { getSession } from 'auth-astro/server'

export async function onRequest(context, next) {
  const session = await getSession(context.request, context.env)

  if (context.url.pathname.includes('/protected') && !session) {
    return context.rewrite('/unauthorized')
  }

  return next()
}
