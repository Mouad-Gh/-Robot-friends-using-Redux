import React from 'react';


const Searchbox=({searchchange})=>{
    return(<div>
        <input className='pa3 ba b--green bg-lightest-blue' type='search' onChange={searchchange} placeholder='Search robots'/>
    </div>)
}

export default Searchbox;