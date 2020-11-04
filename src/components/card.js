import React from 'react';

function Card({nom,src, comm}){
    return(<div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 chadow-5'>
        <img src={`https://robohash.org/${src}?200x200`} alt=""></img>
        <h2>{nom}</h2>
        <p>{comm}</p>


       </div>);
}
export default Card;