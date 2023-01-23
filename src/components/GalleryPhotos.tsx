import { useCallback, useEffect, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

import foto1 from 'assets/galery/foto1.jpg';
import foto2 from 'assets/galery/foto2.jpg';
import foto3 from 'assets/galery/foto3.jpg';
import foto4 from 'assets/galery/foto4.jpg';
import foto5 from 'assets/galery/foto5.jpg';
import foto6 from 'assets/galery/foto6.jpg';
import foto7 from 'assets/galery/foto7.jpg';
import foto8 from 'assets/galery/foto8.jpg';
import foto9 from 'assets/galery/foto9.jpg';

const photos = [
  {
    src: foto1,
    width: 3,
    height: 2,
  },
  {
    src: foto3,
    width: 4,
    height: 5,
  },
  {
    src: foto2,
    width: 3,
    height: 2,
  },
  {
    src: foto6,
    width: 1,
    height: 1,
  },
  {
    src: foto5,
    width: 1,
    height: 1,
  },
  {
    src: foto4,
    width: 4,
    height: 5,
  },
  {
    src: foto9,
    width: 5,
    height: 4,
  },
  {
    src: foto8,
    width: 3,
    height: 2,
  },
  {
    src: foto7,
    width: 2,
    height: 3,
  },
];

let isHydrating = true;

export function GalleryPhotos() {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="font-head mb-14 pt-10 text-center text-3xl font-bold text-gray-700">
        Galeria de Fotos
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  styles={{}}
                  currentIndex={currentImage}
                  views={photos.map((photo) => ({
                    source: photo.src,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : null}
    </div>
  );
}
