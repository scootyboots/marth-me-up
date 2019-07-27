import React, {Component} from 'react'
import './Tags.css'



const Tags = ({topics, click}) => (
  <div className="tag-container">
    {topics.map((topic) => (
      <div className={`Tag ${topic.active}`} onClick={() => click(topic.id)}>{topic.tag}</div>
    ))}
  </div>
  
)

export default Tags