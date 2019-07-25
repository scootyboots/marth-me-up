import React, {Component} from 'react'
import './Tags.css'



const Tags = ({tags, active, click}) => (
  <div className="tag-container">
    {tags.map((tag, index) => (
      <div className={`Tag ${active[index]}`} onClick={() => click(index)}>{tag}</div>
    ))}
  </div>
  
)

export default Tags