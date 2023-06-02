import { NextResponse } from 'next/server'

const subscriptions = [
  {
    name: 'Axell Hodges',
    username: '@slay96',
    verified: true,
    image: '/users/axell.jpg',
  },
  {
    name: 'Medium Boy',
    username: '@medium.boy',
    verified: true,
    image: '/users/medium.jpg',
  },
  {
    name: 'Billy Bolt',
    username: '@bolt57',
    verified: true,
    image: '/users/bolt.jpg',
  },
]

export async function GET(request: Request) {
  return NextResponse.json({ subscriptions })
}
