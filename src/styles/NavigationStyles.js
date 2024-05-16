import styled from 'styled-components';
export default styled.header`

    position: fixed;
    top: 0;
    width: 100vw;
    /* border-top: 1px solid var(--central-black);
    border-bottom: 1px solid var(--central-black); */
    background: #fff;
    color: #666;
    box-shadow: 0 0 8px rgba(0, 0, 0, .16);
    section {
        width: 100%;
        /* background-color: var(--central-white); */
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-container {
        width: 33%;
        margin-top: var(--nav-margin-top);
        margin-bottom: var(--nav-margin-top);
        animation: fadeIn 1s forwards;
        
    }
    .logo {
        height: var(--logo-height);
        /* aspect-ratio: 58 / 17; */
        aspect-ratio: 1084∶493;
        margin-bottom: 0;
        cursor: pointer;
    }

    .nav-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      letter-spacing: 1px;
      .nav-link {
        margin-right: var(--grid-gutter);
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        a.active {
      text-decoration: underline;
    }

      }
    }


    .button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        width:96px;
        width:150px;
        /* line-height: 14px; */
        /* margin-left: 20px; */
        /* width: 163px; */
        background-color: var(--color-la-purple);
        text-align: center;
        color: white;
        font-size: 10px;
    }


  
  .button button {

    border: none;
    background: none;
    outline: none;
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-size: var(--font-size-small);
    /* letter-spacing: 1.5px; */
    /* margin-top: 5px;
    margin-bottom: 5px; */
    /* color: var(--central-olive); */
    color: #fff;
    /* position: relative;
    display: inline-flex; */
    align-items: center;
    justify-content: center;
    min-width: 130px;
    padding: 9px 10px;
    border-width: 1px;
    border-radius: 0;
    text-decoration: none;
    /* white-space: normal; */
    font-weight: 400;
    font-size: var(--font-size-small);
    font-family: "Roboto";
    letter-spacing: .15em;
    text-transform: uppercase;
    line-height: 1.29;
    font-size: 12px;
    
  }




  .button:hover,
  button:hover {
    cursor: pointer;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    background-color: var(--color-la-grey);
    color: white;
  }
  


  
  @keyframes draw {
    from {
      stroke-dasharray: 0 1500;
    }
  
    to {
      stroke-dasharray: 1500 1500;
    }
  }

  

  @media only screen and (min-width: 768px) {
    .button {
      /* width: 130px; */
      button {
        /* padding: 10px 20px; */
        /* line-height: 15px; */
      }
    }
  } 

  @media only screen and (min-width: 992px) {
    .button {
      /* width: 150px; */
      button {
        /* padding: 15px 20px; */
        /* line-height: 15px; */
      }
    }
  } 



`;