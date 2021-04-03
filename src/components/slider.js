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
          class="img-fluid"
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
    { original: 'https://lh3.googleusercontent.com/qtroFNjHzSulLuBp8d2Z2Ut7xAJShsuQB5rQf6lMzXphdMMIUEU5k-dY_8IQjekUXymE5AEz3sg-zcXO7njI0f1m6cibHUOfeOwN2jCQtR79ENky4HJMFSPjtRb9gZY9GUUf46LMahVEI-4G5-4IDgToP1K2cU91lXkvAzQgE1Nm73eBrEyI7Esv-d5QSMvn88-J9LLZyikxYwU-9GnTOaGv5uxKHLLQQGjT3_jsmwivryWI1QPRCGZNBU1JEqy851rBzwqUxuPDWj4Ye-wHdHGtm-khbfFS-LvLdBUbLb_IMBoAzXIvaFGCKIqC9u7djGSa3yY8VHtIL3qABjQG6nbq34fktPhvFJxEpj0dmn4xdnI-zHqroGCNKqPIMZhacy36IzECjG8BRJxdSRwI2QS5IkXp8VwI9jgf5UU9yn9jXbt5sJjInze93jdcsDkMG00ouet5nlROCkEC77m0KAuzb_OZZYLN714iqwo4mrLWfYp4-PmZ7A2RM3vRLjOA0-c-j9PTIWI72excohfztvsb8fP4OQ6HwjCTKRBBleHDzlhze8FHIbY5HLVo7UAKYVvuGuEE7FbzVgcBjVwbBddRfPNnWZvVbdNxbR-U-U6Z_r0VORq5PaZ2loHuKETNtMhciBvS7qthE714ArRpfiArlNY1tEmgAs4FVjMwTzERy5gJdgvga2gGuxt2q2i0aWZa9kbWBrtfCuinfQK4I4g=w1128-h508-no?authuser=0', 
      thumbnail: 'https://lh3.googleusercontent.com/qtroFNjHzSulLuBp8d2Z2Ut7xAJShsuQB5rQf6lMzXphdMMIUEU5k-dY_8IQjekUXymE5AEz3sg-zcXO7njI0f1m6cibHUOfeOwN2jCQtR79ENky4HJMFSPjtRb9gZY9GUUf46LMahVEI-4G5-4IDgToP1K2cU91lXkvAzQgE1Nm73eBrEyI7Esv-d5QSMvn88-J9LLZyikxYwU-9GnTOaGv5uxKHLLQQGjT3_jsmwivryWI1QPRCGZNBU1JEqy851rBzwqUxuPDWj4Ye-wHdHGtm-khbfFS-LvLdBUbLb_IMBoAzXIvaFGCKIqC9u7djGSa3yY8VHtIL3qABjQG6nbq34fktPhvFJxEpj0dmn4xdnI-zHqroGCNKqPIMZhacy36IzECjG8BRJxdSRwI2QS5IkXp8VwI9jgf5UU9yn9jXbt5sJjInze93jdcsDkMG00ouet5nlROCkEC77m0KAuzb_OZZYLN714iqwo4mrLWfYp4-PmZ7A2RM3vRLjOA0-c-j9PTIWI72excohfztvsb8fP4OQ6HwjCTKRBBleHDzlhze8FHIbY5HLVo7UAKYVvuGuEE7FbzVgcBjVwbBddRfPNnWZvVbdNxbR-U-U6Z_r0VORq5PaZ2loHuKETNtMhciBvS7qthE714ArRpfiArlNY1tEmgAs4FVjMwTzERy5gJdgvga2gGuxt2q2i0aWZa9kbWBrtfCuinfQK4I4g=w1128-h508-no?authuser=0', 
      originalAlt: "A wild fjord in the far north.", 
      originalTitle: "A wild fjord in the far north.", 
      description: "A wild fjord in the far North, admiring the infinite.",
    },
    { original: 'https://lh3.googleusercontent.com/pw/ACtC-3ejg6ZnWQkFxfhvlpEYv4wuWUkroMspfFLbU7MiOVqoNphINaq-E0X9lxC8hhRo2ZpKEZ-XDPgrmcoE7EpmAT40K1cR2Ly1TnJ4KmBY0ZbN7mYCoTKvZmJ3DJ1KFgIQrNK2M510gE03FhEuoqo4QTZm=w1920-h960-no?authuser=0', 
      thumbnail: 'https://lh3.googleusercontent.com/pw/ACtC-3ejg6ZnWQkFxfhvlpEYv4wuWUkroMspfFLbU7MiOVqoNphINaq-E0X9lxC8hhRo2ZpKEZ-XDPgrmcoE7EpmAT40K1cR2Ly1TnJ4KmBY0ZbN7mYCoTKvZmJ3DJ1KFgIQrNK2M510gE03FhEuoqo4QTZm=w1920-h960-no?authuser=0', 
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
    { original: 'https://modo-phinf.pstatic.net/20200917_63/1600311724381w121e_JPEG/mosagfjqyI.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_63/1600311724381w121e_JPEG/mosagfjqyI.jpeg?type=a1100', 
      originalAlt: 'A Northern Lights.', 
      originalTitle: 'A Northern Lights.', 
      description: 'A northern lights with greenish hues.'
    },
    { original: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      originalAlt: 'A beautiful sunset over the sea.', 
      originalTitle: 'A beautiful sunset over the sea.', 
      description: 'A beautiful sunset over the sea, where numerous routes of imagination depart.'
    },
    { original: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      originalAlt: 'A beautiful sunset over the sea.', 
      originalTitle: 'A beautiful sunset over the sea.', 
      description: 'A beautiful sunset over the sea, where numerous routes of imagination depart.'
    },
    { original: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      thumbnail: 'https://modo-phinf.pstatic.net/20200917_223/1600311732104JtTTl_JPEG/mosaoMojis.jpeg?type=a1100', 
      originalAlt: 'A beautiful sunset over the sea.', 
      originalTitle: 'A beautiful sunset over the sea.', 
      description: 'A beautiful sunset over the sea, where numerous routes of imagination depart.'
    },

  ]
  return (
    <section className="section">
     <ImageGallery lazyLoad={true} showNav={false} autoPlay={true} showBullets={true} renderItem={renderImage} items={array} />
    </section>
  );
}

export default Slider
