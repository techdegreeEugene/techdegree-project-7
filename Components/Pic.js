import React from 'react';

const Pic = (props) => { 
  
  return (
      <li>
         <img src={ props.url } alt="" />
      </li>
  );
}


export default Pic