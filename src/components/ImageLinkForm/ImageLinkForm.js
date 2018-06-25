import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return(
    <div>
      <p className="center">
        {'This Magic Brain will detect faces in your pictures'}
      </p>
      <div className="center">
        <div className="box-form center">
          <input  onChange={onInputChange} className="center" type="text" />
          <button onClick={onPictureSubmit} className="center detect-btn">Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm