import styled from "styled-components";
export const Footer = styled.footer `
  padding: 0 var(--dp);
  color: var(--clr-gray);
  border-top: 1px solid var(--border-color);

  &.v2 {
    background-color: var(--clr-green);
    color: var(--clr-light-gray);
  }

  &.v2 .text-black {
    color: var(--clr-white);
  }

  > div {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  > div .top {
    gap: var(--dp);
    padding: calc(var(--dp) * 1.5) 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
  }

  > div .bottom {
    display: flex;
    align-items: center;
    padding: var(--dp) 0;
    border-top: 1px solid var(--border-color);

    > div {
      flex: 1;
      display: flex;

      &:nth-child(1) {
        /* Boş: Ekstra stil gerekirse buraya eklenebilir */
      }

      &:nth-child(2) {
        justify-content: center;
      }

      &:nth-child(3) {
        justify-content: flex-end;
      }
    }
  }
`;
//# sourceMappingURL=styles.js.map