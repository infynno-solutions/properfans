import { Feed, Sidebar } from '@/components'

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    cache: 'no-store',
  })
  return res.json()
}

async function getSuggestedCreators() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/suggested-creators`,
    {
      cache: 'no-store',
    },
  )
  return res.json()
}

async function getMySubs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions`, {
    cache: 'no-store',
  })
  return res.json()
}

async function getStories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories`, {
    cache: 'no-store',
  })
  return res.json()
}

const Home = async () => {
  const latestPosts = await getPosts()
  const suggestedCreators = await getSuggestedCreators()
  const mySubs = await getMySubs()
  const stories = await getStories()

  return (
    <main className="flex flex-shrink-0">
      <Sidebar mySubs={mySubs} />
      <Feed
        latestPosts={latestPosts}
        suggestedCreators={suggestedCreators}
        latestStories={stories}
      />
    </main>
  )
}

export default Home
