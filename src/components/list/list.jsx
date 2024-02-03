import React, { useState } from 'react'
import listData from "../../data/events.json"
import ListItem from '../item/list-item'

function List() {

  const [data, setData] = useState(listData)


  return <>

      <div className='d-flex justify-content-center m-2'>
        {data.map((d1, index) => (
          <div key={index} className="card d-flex" style={{width: "500px"}}>
            <ListItem d1={d1} />
          </div>
        ))}

      </div>
      
    
    </>
 
  
}

export default List