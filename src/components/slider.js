import React from 'react'
//import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function renderImage(item) {

  return (

    <div className='image-gallery-image'>
    {
      item.imageSet ?
        <picture>
          {
            item.imageSet.map((source, index) => (
              <source
                key={index}
                media={source.media}
                srcSet={source.srcSet}
                type={source.type}
              />
            ))
          }
          <img
            alt={item.originalAlt}
            src={item.original}
          />
        </picture>
      :
        <img
          src={item.original}
          alt={item.originalAlt}
          srcSet={item.srcSet}
          sizes={item.sizes}
          title={item.originalTitle}
        />
    }

    {
      item.description &&
        <span className='image-gallery-description'>
          {item.description}
        </span>
    }
  </div>

  );
}

const Slider = () => {
  const array =
  [
    { original: 'https://modo-phinf.pstatic.net/20200917_53/1600311721798Ea2yW_JPEG/mosaGx8ktk.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_53/1600311721798Ea2yW_JPEG/mosaGx8ktk.jpeg?type=a1100', 
      originalAlt: "A wild fjord in the far north.", 
      originalTitle: "A wild fjord in the far north.", 
      description: "A wild fjord in the far North, admiring the infinite.",
    },
    { original: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      originalAlt: 'A beautiful sunset over the sea.', 
      originalTitle: 'A beautiful sunset over the sea.', 
      description: 'A beautiful sunset over the sea, where numerous routes of imagination depart.'
    },
    { original: 'https://modo-phinf.pstatic.net/20200917_63/1600311724381w121e_JPEG/mosagfjqyI.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_63/1600311724381w121e_JPEG/mosagfjqyI.jpeg?type=a1100', 
      originalAlt: 'A Northern Lights.', 
      originalTitle: 'A Northern Lights.', 
      description: 'A northern lights with greenish hues.'
    },
  ]
  return (
    <section className="section">
     <ImageGallery lazyLoad={true} showBullets={true} renderItem={renderImage} items={array} />
    </section>
  );
}

export default Slider
