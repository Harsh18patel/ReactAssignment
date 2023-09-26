import React from 'react'
import CardComStyle from './CardComStyle';
import './React.css';

let sports = [{
    img: "https://resources.pulse.icc-cricket.com/ICC/photo/2023/06/27/58598b3c-97a1-4e39-a830-ed4352609cc7/CWC23-Fixtures-announcement-16x9-v2.jpeg" ,
    Title: "Cricket",
    About: "India's Favroutie Sports",
},

{
    img: "https://cdn.24.co.za/files/Cms/General/d/7707/93b6c5a0b5294aa28f071d82dc4af5e2.jpg" ,
    Title: "FootBall",
    About: "World's Favourite Sports",
},

{
    img: "https://phantom-marca.unidadeditorial.es/35c5c21db497520b70f41c10078a815d/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/16/16921371407671.jpg" ,
    Title: "BasketBall",
    About: "Game Of Legends",
},

{
    img: "https://lp-cms-production.imgix.net/2023-08/GettyImages-1638771979.jpg?auto=format&w=1440&h=810&fit=crop&q=75" ,
    Title: "Rugby",
    About: "Game Of Strengths",
},

{
    img: "https://imgnew.outlookindia.com/public/uploads/articles/2019/11/8/HOCKEY.jpg" ,
    Title: "Hocky",
    About: "India National Game",
},

{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDFIzBCVhwbByD9fPx248YVhciqlkqb73Ww&usqp=CAU" ,
    Title: "Golf",
    About: "Game of GentleMan",
},
];

export default function ReactStyleCom() {

  return (
    <>
    <div className="sport" >
    <h1 >Pick Your Sports</h1>
    </div>
    <div className='d-grid gap-3' style={{gridTemplateAreas: `'1fr 1fr 1fr'`}}>
        {
            sports.map((e,i)=>{
                return(
                    <CardComStyle key={i} sports={e} />
                )
            })
        }
    </div>
    </>
  )
}
