import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';

const ModalImage = () => {
    const { imageModal, setImageModal } = useContext(PhotoContext);

    const renderPopup = () => {
        if (imageModal) {
            const newUrl = imageModal.replace("_m", '')
            return <div className='image-modal'>
                <div className='image-container'>
                    <div className='images'>
                        <img src={newUrl} alt={newUrl} />
                    </div>
                    <button className='image-close' onClick={() => setImageModal(null)}>X</button>
                </div>
            </div>;
        }

        return null;
    };

    return <>{renderPopup()}</>;
};

export default ModalImage;
