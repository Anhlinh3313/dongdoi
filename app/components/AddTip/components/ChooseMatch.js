import { Badge } from 'antd'
import moment from 'moment'
import React, { memo } from 'react'
import { FiChevronRight } from 'react-icons/fi'

function ChooseMatch({ LeagueChoose, handleChooseMatch, dataMatchesAndLeagues }) {
  return (
    <div className="bg-gray-100">
      <div className="flex gap-2 p-2">
        <Badge style={{ background: "#52a22d" }} count={1} />
        <div className="font-bold">Chọn giải đấu</div>
      </div>
      <div className="h-[550px] max-h-screen overflow-y-auto">
        {dataMatchesAndLeagues.map((item) => (
          <div key={item.leagueId} className="text-xs cursor-pointer">
            <div className="bg-gray-300 p-1">{item.name}</div>
            {item.matchToDay.map((i, idx) => (
              <div key={idx} onClick={() => handleChooseMatch(i)} className={`flex ${LeagueChoose?.matchId == i.matchId ? "bg-amber-100" : "bg-white"} p-2 border-b border-gray-200 last:border-none`}>
                <div className="flex flex-col min-w-[40px] justify-center">
                  <span>{moment(i.matchTime * 1000).format("DD-MM")}</span>
                  <span>{moment(i.matchTime * 1000).format("HH:mm")}</span>
                </div>
                <div className="h-auto w-[1px] bg-gray-100 ml-2 mr-2"></div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span>{i.homeName}</span>
                    <span>{i.awayName}</span>
                  </div>
                  <FiChevronRight />
                </div>

              </div>
            ))}

          </div>
        ))}
      </div>



    </div>
  )
}

export default memo(ChooseMatch)