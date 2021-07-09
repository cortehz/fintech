import styled from "styled-components/native";

// user top region container
export const TopRegion = styled.View`
  background-color: #001cad;
  border-bottom-left-radius: 30px;
  padding-top: 55px;
  padding-bottom: 40px;
`;

// row styles, each row has items(Views) with space inbetween
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// column styles
export const Column = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

//text styles
export const TextNormal = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const TextSmall = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

export const TextBold = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
`;
