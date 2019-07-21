import React, {Component} from 'react'
import './Tags.css'

const Tags = ({tags, click}) => (
  <div className="tag-container">
    {tags.map((tag) => (
      <div className="Tag" onClick={() => click(tag)}>{tag}</div>
    ))}
  </div>
  
)

export default Tags