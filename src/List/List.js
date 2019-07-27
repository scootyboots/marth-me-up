import React, {Component} from 'react'
import './List.css'

const List = ({topics}) => (
  <div className="list-container">
    {topics.map((topic) => (
      topic.active ?
      <ul>
        {topic.contents.map((content) => <li>{content}</li>)}
      </ul> : null
    ))}
  </div>
)

export default List