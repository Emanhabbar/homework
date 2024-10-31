
import React from  "react";
export default function Format(){
  let item =[{id:1,name:"eman"},
    {id:2,name:"nour"},
    {id:3,name:"lama"},
    {id:4,name:"leen"}
  ];
  return(
    <>
    {item.length !=0 ?(
      <ul>
        {item.map((item,idx)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    ):(
      <p>no item</p>
    )}
    </>
  )
}
