import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import LightboxGalleryStyles from "../styles/LightboxGalleryStyles"



const LightBoxGallery = ({ gallery, ...props }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  let galleryUrls = gallery.map(
    image =>
      image.gatsbyImageData.images.fallback.src
      // image.file.url
  )
  let gallerySrcSets = gallery.map(
    image => image.gatsbyImageData.images.sources[0].srcSet
  )

  const imageCards = galleryUrls.map((imageUrl, index) => (
    <picture class="ratio-16-9">
      <img
        className="image-card"
        src={imageUrl}
        onClick={() => openLightboxOnSlide(index + 1)}
        srcSet={gallerySrcSets[index]}
      />
    </picture>
  ))

  return (
    <LightboxGalleryStyles>
      <div className="h3">Gallery</div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={galleryUrls}
        type="image"
        slide={lightboxController.slide}
      />

      <div className="gallery-container">{imageCards}</div>
    </LightboxGalleryStyles>
  )
}

export default LightBoxGallery

