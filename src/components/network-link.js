import React from 'react'
import Image from './image'

const NetworkLink = ({ url, imgUrl }) => (
  <li>
    <a href={url}>
      <Image />
    </a>
  </li>
)

export default NetworkLink