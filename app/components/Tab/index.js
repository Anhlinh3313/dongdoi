import React from 'react'

function Tab({childrenLeft, data, tabActive, setTabActive, className =""}) {
  return (
    <div className="flex justify-between items-center border-b-2 border-green-700">
      <div className={`flex gap-2 ${className}`}>
        {data.map((i, idx) => (
            <div onClick={() => setTabActive(idx)} key={i.id} className={`h-8 w-24 text-center ${tabActive === idx?" bg-green-700 text-white": "bg-gray-100"} font-bold text-xs rounded-t-lg display-center cursor-pointer`}>{i.name}</div>
        ))}
      </div>
      <div>
        {childrenLeft}
      </div>
    </div>
  )
}

export default Tab;