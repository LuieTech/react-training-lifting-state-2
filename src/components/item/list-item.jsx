import React from 'react'
import "./item.css"
import moment from 'moment'

function ListItem({event, onLike}) {

  const handleOnLike = () => {
    onLike(event.title)
  }

  return (
  
    <div className='card event shadow-hover'>
      <img src={event.image} className="card-img-top" alt="..." />
      <div className="card-body px-2 position-relative">
        <div className="actions position-absolute">
          <span><i className='fa fa-user'>{event.attending}</i></span>  
          <span role='button' onClick={handleOnLike}><i className={`fa fa-heart ${event.liked ? 'text-danger' : ''}`}>{event.liked}</i></span>
        </div>
        <h5 className='fw-lighter'>{event.title}</h5>
        <p className='time'>{moment(event.start).format('lll')}</p>
        {event.tags.map((tag, index) => (
          <span key={index} className='tag badge rounded-pill text-bg-light fw-light'>{tag}</span>
        ))}
      </div>
    </div>

  )
}

ListItem.defaultProps = {
  onLike: () => {}
}

export default ListItem