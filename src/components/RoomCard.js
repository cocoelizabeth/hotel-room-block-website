import React from 'react';
import { Link } from 'gatsby';
import { useBookRoomTypeTemplate } from '../hooks/useBookRoomTypeTemplate';


const RoomCard = ({room,...props}) => {

    // let USDollar = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    // });

    const categoryName = room.categoryName;
    // const imageGallery = room.imageGallery;
    // const longDescription = room.longDescription;
    // const pricePerNight = USDollar.format(room.pricePerNight);
    const pricePerNight = room.pricePerNight.toLocaleString();
    // const shortDescription = room.shortDescription;
    const slug = room.slug.split("/").pop();
    const squareFeet = room.squareFeet.toLocaleString();
    const heroImageSrc = room.imageGallery[0].gatsbyImageData.images.fallback.src;
    const heroImageSrcSet = room.imageGallery[0].gatsbyImageData.images.sources[0].srcSet;
    const heroImageAltText = room.imageGallery[0].categoryName;
    const soldOut = room.soldOut;
    const bookNowLink = useBookRoomTypeTemplate(categoryName);
    let bookNowButtonText;
    let bookNowButtonDisabled;
    if (soldOut) {
      bookNowButtonDisabled= "disabled";
      bookNowButtonText = "Sold Out";
    } else {
      bookNowButtonDisabled = "";
      bookNowButtonText = "Book Now";
    }
  


  return (

        <li className="room-card-container">
            <div className='hero-image'>
                <Link  to={`/rooms/${slug}`}>
                    <img src={heroImageSrc} srcSet={heroImageSrcSet} className="hero-image" alt={heroImageAltText}></img>
                </Link>
            </div>
            <div className="room-card-text-container">
                <Link className="room-card-title-link" to={`/rooms/${slug}`}>
                    <div className="h3 room-title">{categoryName}</div>
                </Link>
                <div className="h4 price">${pricePerNight} USD per night <span className="sf">• {squareFeet} ft²</span></div>
                {/* <div className="h4 price">${pricePerNight} USD per night</div>
                <div className="h4 square-feet">{squareFeet} ft²</div> */}
                <div className="buttons-container">
                    <div class="button-secondary">
                        <Link to={`/rooms/${slug}`}>
                            <button>Learn More</button>
                        </Link>
                    {/* <a href={`/rooms/${slug}`}>

           
                            <button>Learn More</button>
                        </a> */}
                    </div>
                    <div class="button-primary">
                    <a href={bookNowLink}>
                        <button 
                            disabled={bookNowButtonDisabled} 
                            className={bookNowButtonDisabled}>
                            {bookNowButtonText}
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
  

    )
}; 

export default RoomCard;

