import styled from "styled-components/native";

export const MainContainer = styled.View`
  background-color: #fff;
  flex: 1;
  flex-direction: column;
`;

export const MainContent = styled.View`
  position: relative;
`;

export const Scroll = styled.ScrollView`
  background-color: #fff;
  border-top-right-radius: 30px;
  padding-top: 15px;
`;

export const FixedRight = styled.View`
  background-color: #001cad;
  position: absolute;
  right: 0;
  height: 40px;
  width: 40px;
`;
