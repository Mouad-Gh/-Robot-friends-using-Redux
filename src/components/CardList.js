import React from 'react';

import Card from './card';

 const List=({robots})=>{
    
    return (<div>
        {
           robots.map((robot)=>{
           return (<Card key={robot.id} 
            src={robot.id} 
            nom={robot.name} 
            comm={robot.email} />);})
        }
     </div>);
}



export default List;