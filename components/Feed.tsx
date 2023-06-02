import { MdEdit } from 'react-icons/md'
import Post, { PostType } from './Post'
import Link from 'next/link'
import { Creator } from '@/app/api/suggested-creators/route'
import Image from 'next/image'
import Verified from '../public/verified.svg'
import Stories from './Stories'

const Feed = ({ latestPosts, suggestedCreators, latestStories }: any) => {
  return (
    <div className="ml-auto md:w-[calc(100%_-_76px)] lg:w-[calc(100%_-_76px)] xl:w-[calc(100%_-_280px)] px-10">
      <div className="flex max-w-[calc(630px_+_64px_+_280px)] mx-auto">
        <div className="max-w-[490px] mx-auto">
          <div className="pt-10">
            <input
              className="rounded-[10px] border-black border border-opacity-5 text-base font-semibold px-5 py-3 w-full focus:border-opacity-20 outline-none shadow-main"
              placeholder="Search..."
            />
          </div>
          <div className="my-10">
            <Stories latestStories={latestStories} />
          </div>
          <button className="text-center w-full rounded-full py-3 px-5 bg-gradient-button shadow-main flex items-center justify-center gap-2">
            <MdEdit className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-base">New Post</span>
          </button>
          <div className="pt-10">
            {latestPosts.posts.map((post: PostType, index: number) => (
              <Post key={index} {...post} />
            ))}
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="bg-black bg-opacity-5 mt-10 rounded-[10px] shadow-main border border-black border-opacity-5 py-3.5 px-5 w-[280px]">
            <h3 className="text-center text-sm text-gray-500 font-semibold">
              Suggested Creators
            </h3>
            <nav className="mt-10">
              {suggestedCreators.creators.map(
                (creator: Creator, index: number) => (
                  <Link
                    href={`/${creator.username}`}
                    key={index}
                    className="flex items-center gap-3.5 py-3.5 px-2.5"
                  >
                    <div className="relative w-9 h-9 rounded-full bg-gray-100">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-base text-black font-semibold flex items-center gap-1">
                        <span>{creator.name}</span>
                        {creator.verified && (
                          <Image src={Verified} alt="Verified" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">
                        {creator.username}
                      </div>
                    </div>
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
