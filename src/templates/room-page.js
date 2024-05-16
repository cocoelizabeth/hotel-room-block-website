import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from "date-fns"
import { FiCalendar, FiUser } from "react-icons/fi"
import { BiCategory } from "react-icons/bi"
import Layout from "../components/Layout"
import RoomTemplateStyles from "../styles/RoomTemplateStyles"
import { useBookRoomTypeTemplate } from "../hooks/useBookRoomTypeTemplate"
import LightBoxGallery from "../components/LightboxGallery"
import RichText from "../components/richText"
import VirtualTour from "../components/VirtualTour"
// import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
// import { Title } from '../components/typography/Title';
// import SEO from '../components/SEO';
// import PageSpace from '../components/PageSpace';
// import MyPortableText from '../components/MyPortableText';
// import ParagraphText from '../components/typography/ParagraphText';

export const postQuery = graphql`
  query SingleHotelRoomTypeQuery($id: String!) {
    contentfulHotelRoomType(id: { eq: $id }) {
      categoryName
      slug
      pricePerNight
      squareFeet
      beds
      capacity
      virtualTour {
        virtualTour
      }
      imageGallery {
        gatsbyImageData
        file {
          url
          contentType
        }
        description
        title
      }
      shortDescription {
        shortDescription
      }
      longDescription {
        raw
      }
    }
  }
`

function RoomPageTemplate({ data }) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  const room = data.contentfulHotelRoomType;
  const categoryName = room.categoryName;
  const slug = room.slug;
    // const pricePerNight = USDollar.format(room.pricePerNight);
    const pricePerNight = room.pricePerNight.toLocaleString();
  const squareFeet = room.squareFeet.toLocaleString();
  const beds = room.beds[0];
  const capacity = room.capacity;
  const imageGallery = room.imageGallery;
  const shortDescription = room.shortDescription.shortDescription;
  const longDescription = room.longDescription;
  const heroImageSrc = room.imageGallery[0].gatsbyImageData.images.fallback.src;
  const heroImageSrcSet =
    room.imageGallery[0].gatsbyImageData.images.sources[0].srcSet;
  const heroImageAltText = room.imageGallery[0].categoryName;
  const bookNowLink = useBookRoomTypeTemplate(categoryName);
  let virtualTourSrc;
  if(room.virtualTour) {
     virtualTourSrc = room.virtualTour.virtualTour
  }else{
     virtualTourSrc = false;
  }



  
  // create Book Now Link
  // const template = "mailto:reservacionesaqsm@posadas.com?subject=Room%20Reservation%20for%20Coco%20%26%20Adam%E2%80%99s%20Wedding%20-%20Group%20Code%20G1RC3D&body=Dear%20Reservations%20Team%2C%0A%0AI%20would%20like%20to%20book%20a%20room%20for%20Coco%20and%20Adam%27s%20wedding%20in%20San%20Miguel%20de%20Allende%20(Group%20Code%20G1RC3D).%20Please%20find%20my%20details%20below%20for%20the%20reservation%3A%0A%0A-%20Name%3A%0A-%20Email%3A%0A-%20Arrival%20Date%3A%0A-%20Departure%20Date%3A%0A-%20Room%20Type%3A%20%0A-%20Number%20of%20Adults%3A%0A-%20Number%20of%20Children%3A%0A-%20Names%20of%20Additional%20Guests%20Staying%20in%20Room%3A%0A-%20Telephone%3A%0A-%20Address%3A%20%0A-%20City%3A%20%0A-%20State%3A%0A-%20Postal%20Code%3A%0A-%20Country%3A%0A-%20Comments%3A%20%0A%0APlease%20confirm%20the%20availability%20of%20the%20rooms%20and%20any%20further%20steps%20needed%20to%20finalize%20my%20booking.%0A%0AThank%20you%20very%20much!%0A%0ABest%20regards%2C%0A"
  // const roomName =categoryName.toUpperCase()
  // const roomNameSubject = "=".concat(roomName.split(" ").join("%20").concat("%20|%20"))
  // const addSubject = template.split("=Room%20").join(roomNameSubject)
  // const roomNameBody = "Type%3A%20".concat(roomName.split(" ").join("%20"))
  // const addBody = addSubject.split("Type%3A").join(roomNameBody)
  // const bookNowLink = addBody;

  return (
    <RoomTemplateStyles>
      <div className="room-template-container">
        <div className="breadcrumbs">
          <Link to="/rooms" className="bc-link">ROOMS</Link>
          <span> / {categoryName}</span></div>
        <div className="h1">{categoryName}</div>

        <div className="room-content-container">
          <div className="hero-image">
            <img
              src={heroImageSrc}
              srcSet={heroImageSrcSet}
              className="hero-image"
              alt={heroImageAltText}
            ></img>
          </div>

          <div className="text-container">
            <div className="rate-subhead">
              <div className="rate-subhead-text"> Special Wedding Rate</div>
            </div>
            <div className="h4 price">${pricePerNight} USD / Night</div>

            <div className="icon-stats-container">
              <div className="icon-stat sqaure-feet-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.77"
                  height="19.76"
                  viewBox="0 0 19.77 19.76"
                >
                  <script xmlns="" />
                  <g
                    id="Atom_-_Icon_-_area"
                    data-name="Atom - Icon - area"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_255"
                      data-name="Path 255"
                      d="M1.681,2.658a.368.368,0,0,1,.236.085l.027.024,1.31,1.31a.37.37,0,0,1-.495.55L2.73,4.6l-.678-.679V18.207H16.337l-.679-.679a.37.37,0,0,1,.5-.549l.028.026,1.31,1.31a.358.358,0,0,1,.047.056l.006.01a.552.552,0,0,1,.028.054l.006.02a.364.364,0,0,1,.015.2.475.475,0,0,1-.015.05l-.006.019-.013.027-.02.036-.023.03-.025.027-1.31,1.31a.37.37,0,0,1-.549-.495l.025-.028.68-.68H1.68a.371.371,0,0,1-.368-.334l0-.036V3.922L.631,4.6a.37.37,0,0,1-.549-.5l.026-.028,1.31-1.311a.368.368,0,0,1,.262-.11ZM19.39.5a.357.357,0,0,1,.1.015l.038.013A.376.376,0,0,1,19.717.7l.017.04a.349.349,0,0,1,.025.1l0,.034V18.578a.37.37,0,1,1-.74.036h0V13.253l-2.3,2.3a.37.37,0,0,1-.549-.5l.026-.028,2.82-2.82V9.424L12.894,15.55a.37.37,0,0,1-.55-.5h0l.026-.028,6.65-6.65V5.594L9.063,15.55a.37.37,0,0,1-.549-.5l.026-.028L19.019,4.546V1.766L5.234,15.55a.37.37,0,0,1-.55-.5h0l.026-.028L18.5,1.24H15.713L5.233,11.72a.37.37,0,0,1-.548-.5L4.71,11.2l9.956-9.955H11.883l-6.65,6.65a.37.37,0,0,1-.548-.5l.025-.028,6.126-6.126H8.054l-2.82,2.82a.37.37,0,0,1-.55-.5h0l.026-.028,2.3-2.3H1.68A.371.371,0,1,1,1.646.5H19.39Z"
                      transform="translate(0.009 -0.5)"
                      fill="#666"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
                <div className="h4 stat-label">{squareFeet} ft²</div>
              </div>
              <div className="icon-stat sqaure-feet-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  id="Atom_-_icon_-_person"
                  data-name="Atom - icon - person"
                  width="22.93"
                  height="22.929"
                  viewBox="0 0 22.93 22.929"
                >
                  <script xmlns="" />
                  <path
                    id="Path_253"
                    data-name="Path 253"
                    d="M11.464,0A11.465,11.465,0,1,1,0,11.464,11.478,11.478,0,0,1,11.464,0Zm0,.874A10.591,10.591,0,1,0,22.055,11.465,10.6,10.6,0,0,0,11.464.874Zm0,11.169a6.393,6.393,0,0,1,6.65,6.1c0,.938-2.977,2.537-6.65,2.537s-6.649-1.812-6.649-2.536a6.393,6.393,0,0,1,6.65-6.1Zm0-8.721a4.09,4.09,0,1,1,0,8.18h0a4.09,4.09,0,0,1,0-8.18Z"
                    fill="#666"
                    fill-rule="evenodd"
                  />
                </svg>
                <div className="h4 stat-label">{capacity} Adults</div>
              </div>
              <div className="icon-stat bed-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Atom_-_icon_-_bed"
                  data-name="Atom - icon - bed"
                  width="29.975"
                  height="19.993"
                  viewBox="0 0 29.975 19.993"
                >
                  <script xmlns="" />
                  <path
                    id="Path_254"
                    data-name="Path 254"
                    d="M28.453,15.177H1.17V13.6H28.8v1.58h-.35Zm-2.342,4.16h1.17v-3h-1.17Zm-23.418,0H3.864v-3H2.694v3Zm.921-10.17H26.361A2.43,2.43,0,0,1,28.8,11.579v.863H1.171v-.863A2.43,2.43,0,0,1,3.614,9.167Zm9.5-1.155H6.09V5.684a.217.217,0,0,1,.218-.215H12.9a.216.216,0,0,1,.217.215V8.012Zm10.772,0H16.861V5.684a.217.217,0,0,1,.218-.215h6.59a.216.216,0,0,1,.217.215ZM5.351,1.656H24.624a1.363,1.363,0,0,1,1.37,1.352v5h-.937V5.684a1.381,1.381,0,0,0-1.388-1.37h-6.59a1.381,1.381,0,0,0-1.389,1.37V8.012h-1.4V5.684A1.381,1.381,0,0,0,12.9,4.314H6.306a1.381,1.381,0,0,0-1.388,1.37V8.012H3.98v-5A1.363,1.363,0,0,1,5.35,1.656ZM27.165,8.1v-5.1A2.527,2.527,0,0,0,24.625.5H5.35A2.527,2.527,0,0,0,2.81,3.008V8.1A3.579,3.579,0,0,0,0,11.579v4.175a.581.581,0,0,0,.585.578h.937v3.086a1.084,1.084,0,0,0,1.09,1.075H3.946a1.083,1.083,0,0,0,1.089-1.075V16.332H24.94v3.086a1.084,1.084,0,0,0,1.09,1.075h1.334a1.083,1.083,0,0,0,1.089-1.075V16.332h.936a.583.583,0,0,0,.586-.578h0V11.58A3.582,3.582,0,0,0,27.165,8.1Z"
                    transform="translate(0 -0.5)"
                    fill="#666"
                    fill-rule="evenodd"
                  />
                </svg>
                <div className="h4 stat-label">{beds}</div>
              </div>
            </div>
            <p className="description">{shortDescription}</p>
            <p className="description">
              <b>How to Book:</b> Click the 'BOOK NOW' button below to use a preformatted email template— just fill in your details where indicated. The template outlines all the necessary information required to initiate your reservation. 
              If you prefer not to use the pre-formatted template, you may email the hotel directly at <Link to="mailto:reservacionesaqsm@posadas.com" >reservacionesaqsm@posadas.com</Link>. Make sure to include the group code "G1RC3D" in your email to receive the discounted rate.

              </p>
           
            <div class="button-primary">
              <a href={bookNowLink}>
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </div>




        <LightBoxGallery gallery={imageGallery} />

        <VirtualTour virtualTour={virtualTourSrc} />
      
        <Link to="/rooms">
          <div className="return-link">VIEW ALL ROOMS</div>
        </Link>

            {/* <div className="virtual-tour-container">
              <iframe 
                src={virtualTourSrc}
                role="dialog"
                aria-modal="true" 
                title="TrueTour® for fiesta americana puerto vallarta all inclusive icms"
                >
              </iframe>
          </div> */}

      </div>
    </RoomTemplateStyles>
    // <SingleBlogStyles>
    //   <SEO title={blog.title} />
    //   <PageSpace top={80} bottom={100}>
    //     <div className="container">
    //       <div className="blog-header">
    //         <GatsbyImage
    //           image={blog.coverImage.asset.gatsbyImageData}
    //           alt={blog.coverImage.alt}
    //           className="blog-cover-image"
    //         />
    //         <Title className="title">{blog.title}</Title>
    //         <ParagraphText className="publishedAt">
    //           <FiCalendar />
    //           {format(new Date(blog.publishedAt), 'p, MMM dd yyyy')}
    //         </ParagraphText>
    //         <ParagraphText className="categoriesText">
    //           <BiCategory />
    //           <span>
    //             {blog.categories.map((item, index) => (
    //               <span key={item.slug.current}>
    //                 <Link to={`/categories/${item.slug.current}`}>
    //                   {item.title}
    //                 </Link>
    //                 {index < blog.categories.length - 1 ? ', ' : ''}
    //               </span>
    //             ))}
    //           </span>
    //         </ParagraphText>
    //         <ParagraphText className="author">
    //           <FiUser />
    //           <Link to={`/authors/${blog.author.slug.current}`}>
    //             {blog.author.name}
    //           </Link>
    //         </ParagraphText>
    //         <hr className="hr" />
    //         <div className="body">
    //           <MyPortableText value={blog._rawBody} />
    //         </div>
    //       </div>
    //     </div>
    //   </PageSpace>
    // </SingleBlogStyles>
  )
}

export default RoomPageTemplate
