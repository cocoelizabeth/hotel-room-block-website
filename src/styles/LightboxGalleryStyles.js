import styled from "styled-components"
export default styled.div`
  .gallery-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(var(--grid-gutter) / 2);
    margin-top: calc(var(--grid-gutter) / 2);
    padding-bottom: calc(var(--grid-gutter) / 2);
  }

  .ratio-16-9 {
    padding-top: 66.67%;
    position: relative;
  }
  .image-card {
    width: 30vw;
    height: 30vw;

    object-fit: cover;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1025px) {
    .gallery-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1281px) {
  }
`
