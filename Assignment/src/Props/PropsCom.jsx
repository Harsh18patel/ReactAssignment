import React from 'react'
import CardCom from './CardCom'

let data = [
    {
    img:"https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"D&G",
    dec: "A good fragrance with good price"
    },

    {
      img:"https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"D&G",
      dec: "A good fragrance with good price"
      },

      {
        img:"https://images.pexels.com/photos/12563411/pexels-photo-12563411.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"D&G",
        dec: "A good fragrance with good price"
        },

        {
          img:"https://images.pexels.com/photos/14407035/pexels-photo-14407035.jpeg?auto=compress&cs=tinysrgb&w=600",
          title:"D&G",
          dec: "A good fragrance with good price"
          },
    
  ];

export default function PropsCom() {
return (
<>
<h1>Pick Your Perfume</h1>
<div className='d-flex gap-3 flex-column'>
{
data.map((e,i)=>{
  return (
  <CardCom key={i} data={e}
  // img ={e.img}
  // title= {e.title} 
  // dec={e.dec}
  />
)
})
}
</div>
      </>
    );
  }
  