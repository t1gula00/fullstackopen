import React from 'react'

const Notification = ({ message, isStyle }) => {
  const styleObj = isStyle ? 
    {
      color: 'red'
    } : {} ;

  if (message === null) {
    return null
  }

  return (
    <div className="notification" style={styleObj}>
      {message}
    </div>
  )
}

export default Notification;