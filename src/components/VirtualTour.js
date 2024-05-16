import React, { useState } from "react"
import VirtualTourStyles from "../styles/VirtualTourStyles";


const VirtualTour = ({ virtualTour, ...props }) => {
    let virtualTourSrc = virtualTour;
    
  return (
   virtualTourSrc ? 
   <VirtualTourStyles>
       <div className="h3">Virtual Tour</div>
   <div className="virtual-tour-container">

   {/* <iframe src="https://visitingmedia.com/tt8/?ttid=live-aqua-urban-resort-san-miguel-de-allende-icms&amp;_ga-ft=ZkU6rw.AA.AA.AA.AA.Z6mvdZN8SaCIgzIRvJV_oA..2#/3d-model/0/6?c13rl3=0&amp;b11t0=1&amp;a10ph=1&amp;j2ck2=1" role="dialog" aria-modal="true" title="TrueTour® for fiesta americana puerto vallarta all inclusive icms"></iframe> */}
     <iframe 
       src={virtualTourSrc}
       role="dialog"
       aria-modal="true" 
       title="TrueTour® for fiesta americana puerto vallarta all inclusive icms"
       >
     </iframe>
     
 </div>
 </VirtualTourStyles>
    : null
    
  )
}

export default VirtualTour;

