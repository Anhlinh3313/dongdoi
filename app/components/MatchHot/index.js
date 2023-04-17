import { Divider } from 'antd'
import moment from 'moment'
import React from 'react'

function MatchHot({matchs= [], setTabActive}) {
  return (
    <div className="bg-white rounded-md p-2 shadow-sm text-xs mb-5">
    <div className="flex justify-between items-center">
      <span className="font-bold text-base">Trận đấu Hot</span>
      <span className="text-xs cursor-pointer" onClick={() => setTabActive(1)}>Xem thêm</span>
    </div>
    {matchs.slice(0,5).map(match => (
          <div key={match._id}>
            <Divider />
             <div  className="flex items-center justify-around p-2">
            <div className="flex-1  flex flex-col-reverse items-center gap-2 justify-center">
              <span className='hidden-text-1'>{match.teamA.name}</span>
              <img src={match.teamA.avatar} alt={match.teamA.name} className="min-w-[32px] max-w-[32px] h-8" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <span className='hidden-text-1 w-4/5'>{match.leagueName}</span>
              <span>{moment(match.matchTime * 1000).format("L")} {moment(match.matchTime * 1000).format("HH:mm")}</span>
              <span className="bg-green-700 cursor-pointer px-1 text-xs text-white w-14 text-center m-auto rounded-sm">
                {match.articles.length} Tips
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 justify-start">
              <img 
              src={match.teamB.avatar} alt={match.teamB.name} className="min-w-[32px] max-w-[32px] h-8" />
               <span className='hidden-text-1'>{match.teamB.name}</span>
            </div>
            
          </div>
          
          </div>
         
        ))}
    </div>
  )
}

export default MatchHot