import React from 'react'

const ImageContainer = ({src}) => {
  return (
    <div
    style={{
      width: '62%',
      overflow: 'hidden',
      borderRadius: '20px 0 0 20px',
      background: `url(${src}) center/cover no-repeat`,
      
    }}
  />
  )
}

export default ImageContainer