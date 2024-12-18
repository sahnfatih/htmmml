import styled from "styled-components";
export const StatisticsSection = styled.div `
  padding: 10px 20px;
  background-color: var(--section-bg);
`;
export const StatsContainer = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;
export const StatItem = styled.div `
  background-color: var(--card-bg);
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow-hover);
  }

  @media screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`;
export const StatNumber = styled.h3 `
  font-size: 36px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 15px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const StatTitle = styled.h4 `
  font-size: 18px;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 15px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const StatDescription = styled.p `
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.8;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
//# sourceMappingURL=styles.js.map