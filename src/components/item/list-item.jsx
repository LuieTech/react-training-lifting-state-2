import React from 'react'

function ListItem({d1}) {

  return <>

    <img src={d1.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h4>{d1.title}</h4>
      <h5>{d1.start}</h5>
      <p className="card-text"><span>{d1.tags}</span></p>
    </div>
  
  </>
}

export default ListItem