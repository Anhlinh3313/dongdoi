import React from 'react'

function TabRound({data = [], tabActive, setTabActive}) {
  return (
    <div className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
    {data.map((item, index) => (
      <div onClick={() => setTabActive(index)} key={item.id} className={` ${tabActive == index? " bg-white rounded-full shadow text-indigo-900": ""}flex justify-center py-1`}>
        {item.name}
      </div>
    ))}
  </div>
  )
}

export default TabRound