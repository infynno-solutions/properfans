import Image from 'next/image'
import Video from '../public/Video.svg'
import Verified from '../public/verified.svg'
import Tier from '../public/tier_2.svg'
import Link from 'next/link'
import { HiSpeakerWave } from 'react-icons/hi2'
import { MdMoreVert, MdOutlineModeComment, MdPlayArrow } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { LuSend } from 'react-icons/lu'

export type PostType = {
  cover: string
  content: string
  totalComments: string
  totalLikes: string
  user: {
    name: string
    username: string
    verified: boolean
    image: string
  }
  time: string
}

const Post = (post: PostType) => {
  return (
    <div>
      <div className="w-full h-full rounded-[10px] relative">
        <Image src={Video} alt="video" className="w-full" />
        <div className="absolute top-0 left-0 right-0 bg-gradient-post-details rounded-t-[10px] p-2.5">
          <div className="flex items-center justify-between">
            <Link
              href={`/${post.user.username}`}
              className="flex items-center gap-3.5"
            >
              <div className="w-12 h-12 relative rounded-full bg-white bg-opacity-20">
                <Image
                  src={post.user.image}
                  alt={post.user.name}
                  fill
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="text-base text-white font-semibold flex items-center gap-1">
                  <span>{post.user.name}</span>
                  {post.user.verified && (
                    <Image src={Verified} alt="Verified" />
                  )}
                </div>
                <div className="text-sm text-white text-opacity-60 font-normal">
                  {post.time}
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-2.5">
              <button className="w-[46px] h-[46px] bg-white bg-opacity-20 rounded-[40px] flex items-center justify-center">
                <HiSpeakerWave className="w-6 h-6 text-white" />
              </button>
              <button className="w-[46px] h-[46px] bg-white bg-opacity-20 rounded-[40px] flex items-center justify-center">
                <MdMoreVert className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        <button className="bg-white shadow-main w-[46px] h-[46px] flex items-center justify-center absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MdPlayArrow className="w-6 h-6 text-gray-500" />
        </button>
        <span className="absolute text-xs font-semibold left-2.5 bottom-2.5 bg-black bg-opacity-60 rounded px-2 py-1 text-white inline-block">
          00:39
        </span>
      </div>
      <div className="py-5 text-black font-semibold">{post.content}</div>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <MdOutlineModeComment className="text-black text-opacity-20 w-5 h-5" />
            <span className="text-sm font-semibold text-gray-500">
              {post.totalComments}
            </span>
          </button>
          <button className="flex items-center gap-2">
            <AiOutlineHeart className="text-black text-opacity-20 w-5 h-5" />
            <span className="text-sm font-semibold text-gray-500">
              {post.totalLikes}
            </span>
          </button>
          <button className="flex items-center gap-2">
            <LuSend className="text-black text-opacity-20 w-5 h-5" />
          </button>
        </div>
        <button className="flex items-center gap-2 bg-purple-700 bg-opacity-5 px-3.5 py-2 rounded-full border border-purple-700 border-opacity-20 shadow-main">
          <Image src={Tier} alt="Tier" />
          <span className="text-purple-700 font-semibold text-sm">
            Supercross
          </span>
        </button>
      </div>
      <div className="border rounded-full border-black border-opacity-5 p-2.5 mb-5 flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-gray-100" />
        <input
          className="text-gray-500 border-none outline-none w-full font-semibold text-base"
          placeholder="Add comment..."
        />
      </div>
    </div>
  )
}

export default Post
