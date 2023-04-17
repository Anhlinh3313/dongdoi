
import { Divider, Modal } from 'antd'
import ListArticle from 'components/ListArticle'
import moment from 'moment'
import React, { useState } from 'react'
function ListMatch({matchs}) {
  const [isShowModal, setIsShowModal] = useState(null)
  return (
    <>
      <div>
        {matchs.map(match => (
          <div key={match._id}>
             <div  className="flex items-center justify-around p-2">
            <div className="flex-1 flex items-center gap-2 justify-end md:flex-col-reverse">
              {match.teamA.name}
              <img src={match.teamA.avatar} alt={match.teamA.name} className="w-14 h-14" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className="hidden-text-1">{match.leagueName}</span>
              <span>{moment(match.matchTime * 1000).format("L")} {moment(match.matchTime * 1000).format("HH:mm")}</span>
              <span onClick={() => setIsShowModal(match.articles)} className="bg-green-700 cursor-pointer px-1 text-xs text-white w-14 text-center m-auto rounded-sm">
                {match.articles.length} Tips
              </span>
            </div>
            <div className="flex-1 flex items-center gap-2 justify-start md:flex-col">
              <img 
              src={match.teamB.avatar} alt={match.teamB.name} className="w-14 h-14" />
              {match.teamB.name}
            </div>
            
          </div>
          <Divider />
          </div>
         
        ))}
      
      </div>
        
      <Modal title="Các bài viết tips"
        open={isShowModal}
        footer={null}
        closable={true}
        width={800}
        onCancel={() => setIsShowModal(null)}
      >
        <div className="max-h[500px] md:max-h-[400px] overflow-scroll">
          <ListArticle articles={isShowModal}/>
        </div>
      </Modal>
    </>
   
  )
}

export default ListMatch