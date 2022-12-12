import React from "react";

const Image = ({ url, alt, onClickImageModal }) => (
  <li onClick={onClickImageModal}>
    <img src={url} alt={alt} />
    <div className="image-title">{alt}</div>
  </li>
);

export default Image;
