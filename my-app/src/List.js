import React from 'react'

const List = ({items}) => {
  return (
    <ul>
      {
        items.map((item, index) => <ListItem key={index} item={item}/>)
      }

    </ul>
  )
}


export default List;

  const ListItem = ({item}) => {
    return (
      <li>
        {item}
      </li>
    )


  }
