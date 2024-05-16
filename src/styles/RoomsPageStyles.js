import styled from "styled-components"
export default styled.div`
 background: linear-gradient(to bottom, #f8f5f2 0%, rgba(248, 245, 242, 0) 100%);
 ul {
    margin-top: 0;
 }
.rooms-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: var(--grid-padding);

}
.room-items-container {
    display:grid;
    grid-gap: var(--grid-gutter);
    width: 100%;
    padding-inline-start: 0;
    margin: 0;
    list-style-type: none;
    /* gap: var(--grid-gutter); */
    /* row-gap: var(--grid-gutter); */
    /* column-gap: var(--grid-gutter); */
}

.room-card-container {
    background-color: white;
}

.room-card-text-container {
    .room-title,
    .price,
    .square-feet,
    .buttons-container {
        padding-bottom: calc(var(--grid-gutter) / 4);
        padding-left: calc(var(--grid-gutter) / 2);
        padding-right: calc(var(--grid-gutter) / 2);
        padding-top: 0;

    }

}

.h3.room-title {
    margin-top: 0;
    padding-top: calc(var(--grid-gutter) / 2);
}
.h3 {
    font-size: 20px;
}
.h4 {
    font-size: 16px;
}
.sf {
   opacity: 75%;
}
.room-card-text-container .buttons-container {
    display: grid;
    width: 100%;
    padding-bottom: calc(var(--grid-gutter) / 2);
}
.button-primary,
.button-secondary  {
    width: 100%;
    margin-top: calc(var(--grid-gutter) / 2);
   
}
.button-primary {
    width: 100%;
}
@media (min-width: 576px) {
    .rooms-container {
        max-width: 80%;
        /* max-width: 540px; */
    }
    .room-items-container {
        
    }

}
 
@media (min-width: 768px) {
    .rooms-container {
        /* max-width: 720px; */
        max-width: 100%;
    }
    .room-items-container {
      grid-template-columns: 1fr 1fr;
    }

}

@media (min-width: 1025px) {
    .rooms-container {
        /* max-width: 960px; */
    }
    .room-items-container {
        grid-template-columns: 1fr 1fr 1fr;
  
    }
    .buttons-container{
        grid-template-columns: 1fr 1fr;
        grid-gap: calc(var(--grid-gutter) / 2);
    }
    .button-primary button,
    .button-secondary button {
        font-size: 12px;

    }
    }



@media (min-width: 1281px) {
    .rooms-container {
        /* max-width: 1334px; */
    }
    .room-items-container {
        grid-template-columns: 1fr 1fr 1fr;
    }

}





`
