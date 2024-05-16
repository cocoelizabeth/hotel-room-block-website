import styled from "styled-components"
export default styled.div`
  .virtual-tour-container {
    iframe {
      width: 100%;
      /* max-width: 50%; */
      height: 60vh;
    }
  }
  .virtual-tour-container {
    margin-top: calc(var(--grid-gutter) / 2);
  }

  @media (min-width: 576px) {}

  @media (min-width: 768px) {}

  @media (min-width: 1025px) {
    iframe {
      height: 90vh;
      max-width: 60vw;
      margin: 0 auto;
      display: flex;
    }
  }

  @media (min-width: 1281px) {}
`
