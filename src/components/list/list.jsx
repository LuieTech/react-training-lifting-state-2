import React, { useState } from 'react'
import eventsData from "../../data/events.json"
import ListItem from '../item/list-item'

function List() {

  const [events, setEvents] = useState(eventsData)

  const handleOnLineEvent = (title) => {

    setEvents(events.map(event => {
      if(event.title === title) {
        event.liked = !event.liked;
        event.attending = event.liked ? event.attending + 1 : event.attending - 1;
      }
      return event;
    }))

  }


  return <>

      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2'>
        {events.map((event, index) => (
          <div key={index} className="col" >
            <ListItem event={event} onLike={handleOnLineEvent} />
          </div>
        ))}

      </div>
      
    
    </>
 
  
}

export default List