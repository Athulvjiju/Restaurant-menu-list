import React from 'react'

function Review({data}) {
  return (
    <div>
        {data.map(item => (
            <div>
                <h6>{item.name}</h6>
                <p>{item.date}</p>
                <p>{item.comments}
                </p>
                <p>{item.ratings}</p>
                
            </div>
        ))}
    </div>
  )
}

export default Review