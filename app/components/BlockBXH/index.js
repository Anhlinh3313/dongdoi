import React, { useEffect, useMemo, useState } from 'react'
import Tab from 'app/components/Tab';
import { Avatar } from 'antd';

import { AiOutlineLike } from 'react-icons/ai';
import { getAllUser } from 'stores/authentication';
import { MdOutlineArticle } from 'react-icons/md'
import { GiPodiumWinner } from 'react-icons/gi'
import Img from 'app/assets/images/user.png'
import { API_URL } from '@function/wsCode';
import AllGroup from 'project/Group/AllGroup';
import { useRouter } from 'next/router';
import { FiUserPlus } from 'react-icons/fi'
function BlockBXH() {
  const [tabActive, setTabActive] = useState(0);
  const [tabBXH, setTabBXH] = useState(0);
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUser()
      .then(res => {
        setUsers(res.data || [])
      })
  }, [])
  const dataRender = useMemo(() => {
    switch (tabActive) {
      case 0: {
        switch (tabBXH) {
          case 0:
            return users;
          case 1: {
            const newUsers = [...users];
            newUsers.sort((a, b) => {
              return a.like > b.like ? -1 : 1;
            })
            return newUsers;
          }

          case 2: {
            const newUsers = [...users];
            newUsers.sort((a, b) => {
              return b.follower.length < a.follower.length ? -1 : 1;
            })
            return newUsers;
          }

          default:
            return "";
        }
      }
      case 1: {
        const newUsers = users.filter(item => item?.tipsWin?.tips > 0);
        newUsers.sort((a, b) => {
          return b.tipsWin.winTips / b.tipsWin.tips * 100 <  a.tipsWin.winTips / a.tipsWin.tips * 100 ? -1 : 1;
        })
        return newUsers;
      }
      case 2:
        return "";
      default:
        return "";
    }
  }, [tabBXH, tabActive, users])


  return (
    <div className="bg-white rounded-md p-2 shadow-sm">
      <Tab
        data={data}
        tabActive={tabActive}
        setTabActive={setTabActive}
        className="justify-between w-full"
      />
      {tabActive == 0 &&
        <div className="bg-gray-100 flex justify-between pt-1 text-sm">
          {dataBXH.map(item => (
            <div onClick={() => setTabBXH(item.id)} key={item.id} className={`flex-1 text-center pb-1 cursor-pointer ${tabBXH == item.id ? "border-b-4 border-orange-400 text-orange-400 font-bold" : ""}`}>{item.name}</div>
          ))}
        </div>
      }
      {(tabActive == 0 || tabActive == 1) &&
        dataRender?.slice(0, 6).map((user) => (
          <ItemUser key={user._id} item={user} tipsWin={tabActive == 1} />
        ))
      }
      {tabActive === 2 && <AllGroup showTitle={false} />}
    </div>
  )
}

export default BlockBXH;

export const ItemUser = ({ item, tipsWin= false }) => {
  const router = useRouter()
  const AvatarImg = useMemo(() => {
    const user = item;
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
  }, [item])

  return (
    <div key={item._id} className="item flex justify-between items-center p-2 border-b border-gray-100">
      <div onClick={() => router.push(`/user/${item._id}`)} className="cursor-pointer flex gap-2 items-center">
        <Avatar onClick={() => router.push(`/user/${item._id}`)} src={AvatarImg} />
        <div>
          <div className="group-name font-bold text-sm uppercase md:text-[10px]">{item.fullName}</div>
          <div className="text-gray-400 text-xs flex items-center">
            <MdOutlineArticle /> <span className="ml-1 mr-2"> {item.numArticle}</span>
            <AiOutlineLike /> <span className="ml-1 mr-2">{item.like}</span>
            {tipsWin? <>
            <GiPodiumWinner /> <span className="ml-1 mr-2">{item.tipsWin.winTips + "/"+ item.tipsWin.tips}</span></>: 
            <><FiUserPlus /> <span className="ml-1 mr-2">{item.follower.length}</span></>}

          </div>
        </div>
      </div>
      {/* <div className="font-medium text-xs inline-block border-[1px] border-gray-200 px-2 py-[1px] hover:bg-orange-500 hover:text-white cursor-pointer rounded">Tham gia</div> */}
    </div>
  )
}
const dataBXH = [
  {
    id: 0,
    name: "Hot"
  },
  {
    id: 1,
    name: "Thích"
  },
  {
    id: 2,
    name: "Người theo dõi"
  },
]
const data = [
  {
    id: 1,
    name: "BXH thành viên"
  },
  {
    id: 2,
    name: "Chuyên gia"
  },
  {
    id: 3,
    name: "Nhóm"
  },
]