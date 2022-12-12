import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Gallery from './Gallery';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch, setImageModal, page, setPage } =
    useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className='photo-container'>
      {loading ? (
        <Loader />
      ) : (
        <>
          {
            <InfiniteScroll
              hasMore={true}
              next={handleLoadMore}
              dataLength={images?.length || 0}
              loader={null}
            >
              <Gallery
                data={images}
                setImageModal={setImageModal}
              />
            </InfiniteScroll>
          }
        </>
      )}
    </div>
  );
};

export default Container;
