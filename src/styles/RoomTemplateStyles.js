import styled from "styled-components"
export default styled.div`
  ul {
    margin-top: 0;
  }
  .room-template-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: var(--grid-padding);
    padding-top: var(--section-padding-small);
    .breadcrumbs {
      font-size: var(--font-size-xs);
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-la-purple);
      padding-bottom: var(--grid-gutter);
      a {
        text-decoration: underline;
      }
      span {
        color: var(--color-la-grey);
      }
    }
  }
  .room-content-container {
    display: grid;
    grid-gap: var(--grid-gutter);
    width: 100%;
    padding-inline-start: 0;
    margin: 0;
    list-style-type: none;
  }



  .price-container {
    display: flex;
    flex-direction: row;
  }
  .text-container {
    .price,
    .icon-stats-container,
    .description,
    .button-primary {
      padding-bottom: calc(var(--grid-gutter) / 2);
      /* padding-left: calc(var(--grid-gutter) / 2); */
      padding-right: calc(var(--grid-gutter) / 2);
      padding-top: 0;
    }
  }

  .rate-subhead {
    font-size: var(--font-size-xs);
    text-transform: uppercase;
    /* background-color: var(--color-la-light-grey); */
    width: fit-content;
    text-align: center;
    border-radius: 20px;
    /* margin-left: 10px; */
    max-height: fit-content;
    letter-spacing: 1px;

    color: var(--color-la-purple);
    /* border: 1px solid var(--color-la-purple); */
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    .rate-subhead-text {
      padding: 5px;
      padding-top: 0;
      margin: 0 auto;
    }
  }

  .icon-stats-container {
    display: flex;
    .icon-stat {
      margin-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 30px;
        margin-right: 10px;
      }
      .stat-label {
      }
    }
  }
  .h3.room-title {
    margin-top: 0;
    padding-top: calc(var(--grid-gutter) / 2);
  }
  .h3 {
    margin-top: 0;
  }
  .h4.stat-label {
    font-size: 14px;
  }
  .h5 {
    font-size: var(--font-size-small);
  }

  .button-primary,
  .button-secondary {
    width: 100%;
    margin-top: calc(var(--grid-gutter) / 4);
  }

  .return-link {
    /* width: 100%; */
    text-align: center;
    color: var(--color-la-purple);
    width: fit-content;

    padding-top: var(--section-padding-small);
    margin: 0 auto;
    font-size: 20px;
    text-decoration: none;
    border-bottom: 1px solid var(--color-la-purple);
    padding-bottom: 1px;
    margin-bottom: var(--section-padding-small);
    /* background-color: var(--color-la-light-grey); */
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 440px) {
    .icon-stats-container {
        /* justify-content: space-between; */
        .icon-stat {
          margin-right: 15px;
        }
        .h4.stat-label {
          font-size: 12px;
        }
    }
  

}

  @media (min-width: 576px) {
    .room-template-container {
      /* max-width: 540px; */
      .breadcrumbs {
        font-size: 10px;
      }
      .rate-subhead {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    .room-template-container {
      /* max-width: 720px; */
    }
    .return-link {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1025px) {
    .room-template-container {
      /* max-width: 960px; */

    }

    .room-content-container {
      grid-template-columns: 1fr 1fr;
      grid-gap: calc(var(--grid-gutter) / 2);
    }
    .button-primary button,
    .button-secondary button {
      font-size: 12px;
    }

    .rate-subhead {

      text-transform: uppercase;
      margin-left: calc(var(--grid-gutter) / 2);
      .rate-subhead-text {
      }
    }
    .text-container {
      .price,
      .icon-stats-container,
      .description,
      .button-primary {
        padding-left: calc(var(--grid-gutter) / 2);
        padding-top: 0;
      }
    }
  }

  @media (min-width: 1281px) {
    .room-template-container {
      /* max-width: 1334px; */
    }
  }
`
