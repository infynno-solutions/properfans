import { NextResponse } from 'next/server'

export interface Creator {
  name: string
  username: String
  verified: boolean
  image: string
}

const creators: Array<Creator> = [
  {
    name: 'Jeremy Stenberg',
    username: '@twitchthis8',
    verified: true,
    image: '/users/jeremy.jpg',
  },
  {
    name: 'Axell Hodges',
    username: '@slay96',
    verified: true,
    image: '/users/axell.jpg',
  },
]

export async function GET() {
  return NextResponse.json({ creators })
}
