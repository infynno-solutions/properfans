import { NextResponse } from 'next/server'

export interface Story {
  name: string
  status: 'viewed' | 'active' | 'live' | 'story'
  image: string
}

const stories: Array<Story> = [
  {
    name: 'Connor E...',
    image: '/stories/avatar.jpg',
    status: 'story',
  },
  {
    name: 'Manuel L...',
    image: '/stories/avatar-1.jpg',
    status: 'live',
  },
  {
    name: 'Evan.',
    image: '/stories/avatar-2.jpg',
    status: 'active',
  },
  {
    name: 'Casey Ne...',
    image: '/stories/avatar-3.jpg',
    status: 'live',
  },
  {
    name: 'xQc',
    image: '/stories/avatar-4.jpg',
    status: 'viewed',
  },
  {
    name: 'Restt Pow...',
    image: '/stories/avatar-4.jpg',
    status: 'active',
  },
  {
    name: 'Ninja tec...',
    image: '/stories/avatar-5.jpg',
    status: 'active',
  },
  {
    name: 'Resttpow..',
    image: '/stories/avatar-6.jpg',
    status: 'viewed',
  },
  {
    name: 'Nadeshot',
    image: '/stories/avatar-7.jpg',
    status: 'active',
  },
  {
    name: 'Shroud',
    image: '/stories/avatar-8.jpg',
    status: 'viewed',
  },
  {
    name: 'Jeremy S...',
    image: '/stories/avatar.jpg',
    status: 'viewed',
  },
  {
    name: 'Banks tea',
    image: '/stories/avatar-2.jpg',
    status: 'viewed',
  },
]

export async function GET() {
  return NextResponse.json({ stories })
}
