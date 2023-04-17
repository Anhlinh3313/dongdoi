import { Badge } from 'antd';
import React, { memo } from 'react'
import { FiChevronRight } from 'react-icons/fi';

function ConfirmChoose({setAnalysisChoose, analysis, LeagueChoose, analysisChoose}) {
  return (
    <>
        <div className="flex gap-2 p-2">
          <Badge style={{background: "#52a22d"}} count={2}/>
          <div className="font-bold">Xác nhận lựa chọn</div>
        </div>
        <div className="border-4 border-gray-200 p-2">
          {LeagueChoose?
            <div>
              <div className="flex justify-between">
                <span className="font-bold">{LeagueChoose.homeName} VS {LeagueChoose.awayName} </span>
                <FiChevronRight/> 
              </div>
                {analysis ?
                
              <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-2">
                {analysis.map(item => {
                  return item.map(i => {
                    const b = i.indexOf("HDP") != -1 || i.indexOf("T/X") != -1;
                    return (
                      <div onClick={() => {
                        if(b) return;
                        setAnalysisChoose({choose: i, data: item});
                      }} key={i} className={`${i == analysisChoose?.choose?"bg-green-600 text-white":b?"bg-gray-300 text-white": ""} cursor-pointer border border-gray-300 display-center rounded-sm text-xs p-2`}>{i}</div>
                    )
                  })
                })}
              </div>
                : "Không có lựa chọn , vui chọn trận đấu khác"
              }
              

            </div>
            :
            <span>Vui lòng chọn một trận đấu</span>
          }
        </div>
    </>
  
  )
}

export default memo(ConfirmChoose)