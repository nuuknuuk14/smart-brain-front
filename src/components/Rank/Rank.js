import React from 'react';

const Rank = ({name, entries}) => {
  return(
    <div style={{display: "flex", justifyContent: "center", fontSize: "2em",color:"white"}}>
      {`${name} , your current rank is...`}
      <div className='white f1 '>
        {entries}
      </div>
    </div>
  )
}

export default Rank