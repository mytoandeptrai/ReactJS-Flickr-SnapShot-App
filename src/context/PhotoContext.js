import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageModal, setImageModal] = useState(null);
  const [page, setPage] = useState(1);

  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&page=${page}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        const photoResponse = response.data.photos.photo;
        setImages(prev => [...prev, ...photoResponse]);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch, imageModal, setImageModal, page, setPage }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
