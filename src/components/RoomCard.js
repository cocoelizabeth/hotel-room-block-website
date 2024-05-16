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

    const bookNowLink = useBookRoomTypeTemplate(categoryName);


  return (

        <li className="room-card-container">
            <div className='hero-image'>
                <img src={heroImageSrc} srcSet={heroImageSrcSet} className="hero-image" alt={heroImageAltText}></img>
            </div>
            <div className="room-card-text-container">
   
                <div className="h3 room-title">{categoryName}</div>
             
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
                        <button>Book Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
  

    )
}; 

export default RoomCard;

