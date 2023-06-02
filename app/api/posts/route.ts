import { PostType } from '@/components/Post'
import { NextResponse } from 'next/server'

const posts: Array<PostType> = [
  {
    cover: 'posts/cover.svg',
    content: 'SLAYGROUND 3 is out now!! #dirtshark',
    totalComments: '84',
    totalLikes: '1.2 K',
    user: {
      name: 'Axell Hodges',
      verified: true,
      username: '@slay96',
      image: '/users/axell.jpg',
    },
    time: '47m ago',
  },
]

export async function GET() {
  return NextResponse.json({ posts })
}
