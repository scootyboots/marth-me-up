import React, {Component} from 'react'
import './List.css'

const List = ({contents}) => (
  <div className="list-container">
    {contents.map((content) => (
      content ?
      <ul>
        {content.map((contentEntry) => <li>{contentEntry}</li>)}
      </ul> : null
    ))}
  </div>
)

export default List