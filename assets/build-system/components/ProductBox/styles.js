import styled from 'styled-components';
export const ProductBox = styled.div `
  background-color: var(--bg-white);
  border-radius: var(--base-radius);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--shadow);
  height: 100%;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: translateY(-5px);
  }
`;
export const ProductLink = styled.a `
  display: block;
  text-decoration: none;
  color: var(--clr-black);
  height: 100%;
`;
export const ImageWrapper = styled.div `
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background-color: var(--clr-smooth-gray);
`;
export const ProductImage = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductBox}:hover & {
    transform: scale(1.05);
  }
`;
export const DiscountBadge = styled.span `
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--hot-bg);
  color: var(--hot-cl);
  padding: 4px 8px;
  border-radius: var(--radius-xs);
  font-size: 12px;
  font-weight: var(--fw-600);
`;
export const ContentWrapper = styled.div `
  padding: var(--dp);

  @media screen and (max-width: 668px) {
    padding: calc(var(--dp) / 2);
  }
`;
export const Title = styled.h3 `
  font-size: 16px;
  font-weight: var(--fw-500);
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  height: 44px;
  color: var(--clr-black);

  @media screen and (max-width: 668px) {
    font-size: 14px;
    height: 40px;
    margin-bottom: 8px;
  }
`;
export const PriceWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
export const CurrentPrice = styled.span `
  font-size: 18px;
  font-weight: var(--fw-600);
  color: var(--clr-black);

  @media screen and (max-width: 668px) {
    font-size: 16px;
  }
`;
export const OldPrice = styled.span `
  font-size: 14px;
  color: var(--clr-gray);
  text-decoration: line-through;

  @media screen and (max-width: 668px) {
    font-size: 12px;
  }
`;
//# sourceMappingURL=styles.js.map