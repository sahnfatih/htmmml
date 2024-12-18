import styled from 'styled-components';
export const SliderSection = styled.section `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
export const SliderContainer = styled.div `
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
export const Slider = styled.div `
  position: relative;
  width: 100%;
  height: 500px;
`;
export const Slide = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
`;
export const SlideImageWrapper = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
`;
export const SlideImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SlideContent = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
`;
export const SlideTitle = styled.h2 `
  font-size: 24px;
  margin-bottom: 10px;
`;
export const SlideDescription = styled.p `
  font-size: 16px;
  margin-bottom: 15px;
`;
export const SlideLink = styled.a `
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-dark);
  }
`;
export const SliderControls = styled.div `
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;
export const SliderButton = styled.button `
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
export const PlayPauseButton = styled(SliderButton) `
  font-size: 16px;
`;
//# sourceMappingURL=styles.js.map