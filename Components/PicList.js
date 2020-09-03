import React from 'react';
import Pic from './Pic';

const PicList = (props) => { 

  const results = props.data;
  // console.log(results)
  let flickr;
  flickr = results.map(image => <Pic url={`http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>);
  let title = props.title

  return (
    <div className="photo-container">
      <h2> { title } Results</h2>
        <ul>  
          { flickr }
        </ul>
    </div>
    )
}

export default PicList;
