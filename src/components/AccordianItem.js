import React from "react";
import RichText from "./richText";
class AccordianItem extends React.Component {
    constructor(room, idx, ...props) {
        super(props)
  
        this.categoryName = room.room.categoryName;
        this.imageGallery = room.room.imageGallery;
        // this.heroImage = this.room.imageGallery[0];
        this.longDescription = room.room.longDescription;
        this.pricePerNight = room.room.pricePerNight;
        this.shortDescription = room.room.shortDescription.shortDescription;
        this.slug = room.room.slug;
        this.squareFeet = room.room.squareFeet;
        this.title = this.categoryName;
        this.index = room.idx;
        this.heroImageSrc = room.room.imageGallery[0].gatsbyImageData.images.fallback.src;
        this.heroImageSrcSet = room.room.imageGallery[0].gatsbyImageData.images.sources[0].srcSet;
        this.heroImageAltText = room.room.imageGallery[0].title;
        this.accordianContent = React.createRef();
        this.accordianTitle = React.createRef();
        this.handleAccordianItemClick = this.handleAccordianItemClick.bind(this);
        
        
    }
    


    handleAccordianItemClick() {
        this.accordianContent.current.classList.toggle("reveal");
        this.accordianTitle.current.classList.toggle("reveal");
    }

    render() {
        let firstItem;
        if (this.index === 0) {
           firstItem = "reveal"
        }
   
            return (
                <>

                <li
                className="accordian-item-card border-bottom"
                id={`pos-${this.index}`}
                key={this.title}
                >
                    {/* <div onClick = {this.handleAccordianItemClick} ref={this.accordianTitle}  className={`h1 accordian-title ${firstItem}`}>{this.title}</div> */}
                    <div onClick = {this.handleAccordianItemClick} ref={this.accordianTitle}  className={`h1 accordian-title ${firstItem}`}>
                        <div className="accordian-hero-img-container">
                            <img src={this.heroImageSrc} srcSet={this.heroImageSrcSet} className="hero-image" alt={this.heroImageAltText}></img>
                        </div>
                        <div className="accordian-text-title-container">
                            <div className="h3 room-title">{this.title}</div>
                            <div className="h4 price">${this.pricePerNight} USD per night</div>
                            <div className="h4 square-feet">{this.squareFeet} ft<sup>2</sup></div>
                            <div className="arrow"></div>
                        </div>
                 

                        
                    </div>

                    {/* <div className="accordian-item-subtitle">{this.pricePerNight}</div> */}
                    <div className={`accordian-content ${firstItem} ${this.title}`} ref={this.accordianContent}>
                        {this.categoryName}
                        <RichText copy={this.longDescription} title={this.title} />
                    </div>


                </li>
                </>
            )
         
        }
    }

      
       

    



// const ProjectHeroItem = ({ project, children }) => {

//     return (

//         <div>
//             <title>{project.title}</title>

//             <nav>
//                 <ul>
//                     <li><Link to="/work">Our Work</Link></li>
//                     <li><Link to="/">Home</Link></li>
//                 </ul>
//             </nav>

//             <main>
//                 <h1>{project}</h1>
//                 {children}
//             </main>
//         </div>

//     )
// }


export default AccordianItem;