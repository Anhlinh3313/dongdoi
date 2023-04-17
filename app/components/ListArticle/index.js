import { Avatar, Divider } from 'antd'
import React, { useMemo } from 'react'
import { CgEye } from 'react-icons/cg';
import { BiLike } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa';
import { API_URL } from "app/@function/wsCode";
import Img from 'app/assets/images/user.png'
import moment from 'moment';
import 'moment/locale/vi';
import Link from 'next/link';
import { useRouter } from 'next/router';
function ListArticle({ articles, isGroup = false, isName = true }) {
  if (articles.length == 0) {
    return <div className="p-5 text-center">Chưa có bài viết nào</div>
  }
  return (
    <div className="shadow-lg p-3 mt-4 md:mt-0">
      {articles.map(article => (
        <Article key={article._id} article={article} isGroup={isGroup} isName={isName} />
      ))}
    </div>
  )
}

export default ListArticle;

function Article({ article, isGroup, isName }) {
  const router = useRouter();
  const AvatarImg = useMemo(() => {
    const user = article.user;
    let url = ''
    if (user?.avatar) {
      if (user.avatar.includes("http")) {
        url = user.avatar
      } else {
        url = `${API_URL}/images/` + user.avatar
      }
    } else {
      url = Img.src;
    }
    return url;
  }, [article])

  const dataMatch = useMemo(() => {
    try {
      if (article.type == "1") {
        return { match: article.matchId, analysis: JSON.parse(article.matchInfo).analysis }
      }
    } catch {
      return null;
    }
  }, [article])

  const handleClickUser = () => {
    router.push(`/user/${article.user._id}`);
  }
  return (
    <>
      <div className="flex gap-2 w-full">
        {isName && <Avatar onClick={handleClickUser} className="min-w-[36px] h-9" src={AvatarImg} />}
        <div className="w-full">
          {isName && <div onClick={handleClickUser}
            className="cursor-pointer font-bold text-green-500">{article.user?.fullName}</div>
          }
          <Link href={`/article/${article.slugs}`}>
            {dataMatch ?
              <div className="bg-gray-50 flex flex-col py-3 px-4 rounded-xl cursor-pointer">
                <span className="font-bold text-lg md:text-sm">{article.title}</span>
                <span className='text-gray-600 text-xs'>

                  <span className="mr-2">{dataMatch?.match.leagueName}</span>
                  <span className="mr-1">({moment(dataMatch.match.matchTime * 1000).format("L")}</span>
                  <span>{moment(dataMatch.match.matchTime * 1000).format("HH:mm")})</span>

                </span>
                <div className='flex gap-3 mt-2 md:mt-1 md:text-xs'>
                  {/* <div className="bg-green-500 py-[2px] px-2 inline-block text-white rounded-full
          text-xs">T/X</div> */}
                  <div className="">
                    {dataMatch.match.teamA.name}  <span className="mx-1">-</span>{dataMatch.match.teamB.name}
                  </div>
                </div>
              </div>
              : <div className="font-bold text-base md:text-sm">
                {article.title}
              </div>
            }

          </Link>

          <div className="flex justify-between mt-2">
            <div className="">{moment(article.createdTime).fromNow()}
              {!isGroup && <>  Nhóm : <span className="text-green-500">⭐Tips 5 Sao⭐</span></>}

            </div>
            <div className="flex gap-4 text-gray-400">
              <span className="flex gap-2 items-center"><CgEye /> {article.numView}</span>
              <span className="flex gap-2 items-center"><BiLike /> {article.numLike}</span>
              <span className="flex gap-2 items-center"><FaRegCommentDots /> {article.comment.length}</span>
            </div>
          </div>
        </div>

      </div>
      <Divider />
    </>
  )
}