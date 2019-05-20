import React from 'react'
import './network-link.scss'

const NetworkLink = ({ url, img }) => (
  <li className="col-auto network-link">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={`logo-${url}`}></img>
    </a>
  </li >
)

export default NetworkLink