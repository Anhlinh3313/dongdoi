import { Avatar, Divider, notification } from 'antd';
import React, { useContext, useMemo, useState } from 'react'
import { FaRegCommentDots } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import 'moment/locale/vi'; 
import Button from 'components/Button';
import ModalShowComment from 'project/Modal/ModalShowComment';
import { CommentArticle } from 'stores/article';
import { UserContext } from 'context/userContext';
import { useRouter } from 'next/router';
import moment from 'moment';
import Notication from 'helpers/Notication'
import { API_URL } from '@function/wsCode';
import Img from 'app/assets/images/user.png'
function BlockComment({comments, setArticle, numComment}) {
  const [isShowModalComment, setIsShowModalComment] = useState(false)
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);

  const router = useRouter();
 
  const handleComment = () => {
    if(!user){
      Notication("Bạn chưa đăng nhập")
      return;
    }
    if(!comment) return;
    CommentArticle(router.query.id,
      {
        comment: comment,
        userId: user._id,
      }
    ).then((res) => {
      if(res.status === "success") {
        setComment("");
        setArticle(res.data, user)
      }
    })
  }
  return (
    <>
      <div>
        <span className="font-bold flex items-center gap-2 mb-4"> <FaRegCommentDots /> {numComment} Bình luận</span>
      </div>
      <Divider />
      {comments.map(comment => (
       <ItemComment key={comment._id} comment={comment} setIsShowModalComment={setIsShowModalComment} />
      ))}

      {/* input */}
      <div className="mt-5">
        <h4 className="font-bold">Bình luận</h4>
        <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-full h-28 border border-gray-400 outline-none rounded-md bg-gray-100 p-2"> 
        </textarea>
        <div className="w-40 ml-auto">
          <Button onClick={handleComment} title="Gửi"/>
        </div>
      </div>
      <ModalShowComment isOpen={isShowModalComment} onClose={() => setIsShowModalComment(false)}/>
    </>
  )
}

export default BlockComment;

const ItemComment = ({comment, setIsShowModalComment}) => {
  const AvatarImg = useMemo(() => {
    const user = comment.userId;
    let url = ''
    if(user?.avatar){
      if(user.avatar.includes("http")){
        url = user.avatar
      }else {
        url = `${API_URL}/images/` + user.avatar
      }
    }else {
      url = Img.src;
    }
    return url;
  },[comment])
  return (
    <div  className="wrap-comment mb-3">
    <div  className="flex justify-between items-center">
    <div className="flex gap-2 w-full">
      <Avatar src={AvatarImg} className="min-w-[36px] h-9" />
      <div className="w-full">
        <div className="font-bold text-green-500">{comment.userId.fullName}</div>
        <div className="text-xs ">{comment.comment}</div>
        <div className="text-xs text-gray-400 mt-1">{moment(comment.createdAt).fromNow()}</div>
      </div>
    </div>
    <div className="text-lg flex flex-col items-end gap-2 ml-5">
      <BsThreeDots />
      <div className="flex gap-6">
        <AiOutlineLike />
        {/* <FaRegCommentDots className="cursor-pointer" onClick={() => setIsShowModalComment(true)} />   */}
      </div>
    </div>
  </div>
  {/* <div className="mt-2 ml-10 bg-gray-100 p-2">
    <div className="flex flex-col w-full">
          <div className="flex items-center">
            <div className="font-bold text-green-500 whitespace-nowrap">Khang Pham : </div>
            <div className="text-xs ml-2">Tuy nhiên, đối với những chuyên gia có tỷ lệ thắng thấp hơn 60% trong 2 tuần liên tiếp.</div>
          </div>
          <div className="text-xs text-gray-400 mt-1">{moment(article.createdTime).fromNow()}</div>
    </div>
  </div> */}
      
</div>
  )
}