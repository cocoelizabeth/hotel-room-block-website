import * as React from "react"
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import RichText from "../components/richText"
import HomepageStyles from "../styles/HomepageStyles"
import Accordian from "../components/Accordian"
import AccordianItem from "../components/AccordianItem"
import Image from "../components/Image"
import AccordianStyles from "../styles/AccordianStyles"
import RoomCard from "../components/RoomCard"
import RoomsPageStyles from "../styles/RoomsPageStyles"


export default class RoomsPage extends React.Component {
  constructor(props) {
    super(props)
    this.rooms = props.data.allContentfulHotelRoomType.edges
  }

  render() {
    let roomItems = this.rooms.map((room, i) => {
      return <RoomCard idx={i} key={i} room={room.node} />
    })

    let roomAccordianItems = this.rooms.map((room, i) => {
      return <AccordianItem idx={i} key={i} room={room.node} />
    })

    return (
      <div>
        {/* <HomepageStyles>
          <div className="hero-image-container fade-in">
            <img
              src="https://images.ctfassets.net/60nhqkckk4i6/4D38AVYfDeVw8TBxXg7XxZ/06ad9725c6834638cace499ebe998454/deluxe-room-king-bed-2-1800x1200_standard.jpg?w=1400&amp;h=1050&amp;fl=progressive&amp;q=50&amp;fm=jpg"
              srcset="https://images.ctfassets.net/60nhqkckk4i6/4D38AVYfDeVw8TBxXg7XxZ/06ad9725c6834638cace499ebe998454/deluxe-room-king-bed-2-1800x1200_standard.jpg?w=350&amp;h=263&amp;q=50&amp;fm=webp 350w,
                https://images.ctfassets.net/60nhqkckk4i6/4D38AVYfDeVw8TBxXg7XxZ/06ad9725c6834638cace499ebe998454/deluxe-room-king-bed-2-1800x1200_standard.jpg?w=700&amp;h=525&amp;q=50&amp;fm=webp 700w,
                https://images.ctfassets.net/60nhqkckk4i6/4D38AVYfDeVw8TBxXg7XxZ/06ad9725c6834638cace499ebe998454/deluxe-room-king-bed-2-1800x1200_standard.jpg?w=1400&amp;h=1050&amp;q=50&amp;fm=webp 1400w"
              class="hero-image"
              alt=""
            ></img>
          </div>
        </HomepageStyles> */}
        <RoomsPageStyles>
        <div className="rooms-container">
          <div className="h1">Room Options</div>
                <ul className="room-items-container">
                    {roomItems}
                </ul>
            </div>
        </RoomsPageStyles>
        {/* <AccordianStyles>
          <ul className="accordian-container">{roomAccordianItems}</ul>
        </AccordianStyles> */}
      </div>
    
    )
  }
}

export const pageQuery = graphql`
  query {
    allContentfulHotelRoomType (sort: {fields: pricePerNight, order:ASC}) {
      edges {
        node {
          categoryName
          slug
          pricePerNight
          squareFeet
          beds
          capacity
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
    }
  }
`
