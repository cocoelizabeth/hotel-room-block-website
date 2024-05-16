import styled from 'styled-components';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

export default styled.div`
section {
    padding-bottom: 2rem;
}
.hero-image-container {
        padding-top: var(--header-height);
        height: calc(100vh - (var(--header-height) * 5));
        position: relative;
        margin-top:calc(var(--header-height) * -1);
    }
    .hero-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin: 0 auto;

    }

.body-copy-container {
    text-align: left;
    padding-top: var(--section-padding-small);
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    max-width: 900px;
    margin: 0 auto;
  
   
    /* padding-left: var(--grid-gutter);
    padding-right: var(--grid-gutter); */

    p {
        /* font-size: var(--font-size-body-copy); */
        line-height: calc(var(--font-size-body-copy) * 2);
        padding-top: calc(var(--grid-gutter) / 2);
  
        /* margin-bottom: 3rem; */
    }
}


/*=============================================
=            HOME PAGE RICH TEXT BLOCKS            =
=============================================*/

/*----------  Welcome Paragraph  ----------*/
/* Heading */
.richTextContainer :nth-child(1) {
    text-align: center;
    margin: 0 auto;
   
}

/* Subhead */
.richTextContainer :nth-child(2) {
    text-align: center;
    margin: 0 auto;
   text-wrap: balance;
}

/* Paragraph Text */
.richTextContainer p:nth-child(3) {
    text-align: center;
    margin: 0 auto;
   text-wrap: balance;
  
}

.richTextContainer p:nth-child(3)::after {
    content: "-";
    width: 70px;
    height: 4px;
    color: var(--color-la-purple);
    background-color: var(--color-la-purple);
 
    font-size: 1px;
    line-height: 1px;
    display: block;
    margin: 0 auto;
    margin-top: var(--grid-gutter);
    margin-bottom: var(--grid-gutter);
}

@media only screen and (min-width: 576px) {
    .richTextContainer :nth-child(2),
    .richTextContainer p:nth-child(3) {
   
    }

}
@media only screen and (min-width: 768px) {
    .richTextContainer :nth-child(2),
    .richTextContainer :nth-child(3) {
        text-wrap: balance;
    }
}

@media only screen and (min-width: 992px) {
    .richTextContainer :nth-child(2),
    .richTextContainer :nth-child(3) {
        max-width: 811px;
    }
}


/*----------  Room Options & Special Rates ----------*/
/* Heading */
.richTextContainer :nth-child(4) {
    text-wrap: balance;
}

/* Paragraph Text 1 */
.richTextContainer :nth-child(5) {
    /* Remove space before second line of h3 for "Room Options & Special Rates" */
    margin-top: 0; 
    text-wrap: pretty;
} 

/* .richTextContainer {
    table {
        width: 100%;
    } 
} */
p:has(code) {
    display: flex;
}

a:has(code) {

    border: none;
  background: none;
  outline: none;
  text-transform: uppercase;

  border: 1px solid var(--color-la-grey);
  background-color: white;

  align-items: center;
  justify-content: center;
  /* min-width: 130px;
  padding: 9px 10px; */
  /* padding: 1em; */
  width:100%;
  padding: 9px 10px;
  border-width: 1px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 400;
  font-size: var(--font-size-small);
  font-family: "Roboto";
  letter-spacing: .15em;
  text-transform: uppercase;
  line-height: 1.29;
  font-size: 12px;
  cursor: pointer;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    width: 100%;
    code {
        text-decoration: none;
        color: var(--color-la-grey);
    }
}
a:has(code):hover {
    background-color: var(--color-la-grey);
     
        code {
            color: white;
        }
}

/*----------  How to Book  ----------*/
/* Heading */
.richTextContainer :nth-child(8) {}

/* Email Reservations Header */
.richTextContainer h5:nth-of-type(1) {
    margin-block-start: 0px;
}
.richTextContainer h5:nth-of-type(1)::before {
    content: url("data:image/svg+xml; utf8, ${renderToStaticMarkup(<HiOutlineMail/>).replace(/"/g, '\'')}");
}
/* Email Reservations -Preformatted template text (p 1) */
.richTextContainer :nth-child(10) {}
/* Email Reservations -Direct Email Text (p 2) */
.richTextContainer :nth-child(11) {}
/* Phone Reservations Headline */
.richTextContainer h5:nth-of-type(2){
    padding-top: var(--grid-gutter);
}
.richTextContainer h5:nth-of-type(2)::before {
    content: url("data:image/svg+xml; utf8, ${renderToStaticMarkup(<HiOutlinePhone/>).replace(/"/g, '\'')}");
}
.richTextContainer h5:nth-of-type(1),
.richTextContainer h5:nth-of-type(2) {
    margin-block-end: 0px;
}
.richTextContainer h5:nth-of-type(1)::before,
.richTextContainer h5:nth-of-type(2)::before {
    width: 20px;
    height: 20px;
    color: var(--color-la-purple);
    margin-right: 5px;
    align-self: center;
    display: inline-block;
    vertical-align: middle;
    opacity: 70%;
}


@media only screen and (min-width: 576px) {
    .h1, .h2 {
            /* max-width: 540px; */
           
        }
}


@media only screen and (min-width: 768px) {
    .hero-image-container {
        height: calc(100vh - (var(--header-height)));
    }
    .body-copy-container {
        .h1, .h2 {
            /* max-width: 80%; */
            /* margin: 0 auto;
            text-align: center; */
            
        }
        .h1 {
            margin-bottom: 10px;
        }
        .h2 {
            margin-bottom: 1.5em;
        }
        p:nth-child(3) {
            /* padding-left: var(--grid-padding); */
            /* max-width: 66%;
            text-align: center; */
        }
    } 
}

@media only screen and (min-width: 992px) {
    .hero-image-container {
        height: calc(100vh - (var(--header-height) * 1));
    }
}
   
.richTextContainer p em b::before {
    content: "-";
    width: 70px;
    height: 4px;
    color: var(--color-la-purple);
    background-color: var(--color-la-purple);
 
    font-size: 1px;
    line-height: 1px;
    display: block;
    margin: 0 auto;
    margin-top: var(--grid-gutter);
    margin-bottom: var(--grid-gutter);
}

.richTextContainer p:has(em) {
    text-align: center !important;
    margin: 0 auto;
    width: 100%;
    padding-bottom: var(--section-padding-small);
    text-wrap: balance;
}

.richTextContainer li:has(p) {
    text-align: left !important;

}
.richTextContainer ul {
    background-color: var(--color-la-light-grey);
    margin-top: 0;
    margin-bottom: 0px;
    /* padding-top: calc(var(--grid-gutter) / 2) */
}



.richTextContainer li {
    text-align: left !important;
    color: var(--color-la-grey);
    max-width: 100% !important;
    text-wrap: wrap !important;
   p{
    line-height: 1.5;
   }
}

.richTextContainer li p {
    text-align: left !important;
    color: var(--color-la-grey);
    padding-right: calc(var(--grid-gutter) / 1);
    
    b{
        font-weight: 400;
       
    }


}

.richTextContainer h6 {
    font-size: var(--font-size-body-copy);
    font-family: var(--font-family-body);
    font-weight: 300;
    color: var(--color-la-grey);
    background-color: var(--color-la-light-grey);
    margin-top: 0;
    margin-bottom: 0;
    padding-left: calc(var(--grid-gutter) / 1);
    padding-right: calc(var(--grid-gutter) / 1);
    padding-top: calc(var(--grid-gutter) / 2);
}

.richTextContainer h6:first-of-type {
    padding-top: calc(var(--grid-gutter) / 1);
    margin-top: calc(var(--grid-gutter) * 2);
}

.richTextContainer h6:last-of-type {
    padding-bottom: calc(var(--grid-gutter) / 1);
}








`;