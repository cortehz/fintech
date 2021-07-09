import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";
import { Row } from "../components/header/Header.style";

const TextStyled = styled.Text`
  font-size: 16px;
  padding-right: 12px;
  padding-left: 8px;
  color: #001cad;
`;

const QuickAccessButtons: React.FC = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "5%",
        flexDirection: "row",
        alignSelf: "center",
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: "#f9fafe",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <TouchableWithoutFeedback onPress={() => {}}>
        <Row
          style={{
            borderRightWidth: 1,
            borderColor: "#999",
            margin: 10,
          }}
        >
          <Svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="exchange-alt"
            viewBox="0 0 512 512"
            width={15}
            height={15}
          >
            <Path
              fill="#001cad"
              d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
            ></Path>
          </Svg>
          <TextStyled style={{ marginRight: 10 }}>Transfer</TextStyled>
        </Row>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Row>
          <Svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="exchange-alt"
            viewBox="0 0 512 512"
            width={15}
            height={15}
            style={{ transform: [{ rotate: "90deg" }], marginLeft: 10 }}
          >
            <Path
              fill="#001cad"
              d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
            ></Path>
          </Svg>
          <TextStyled>Exchange</TextStyled>
        </Row>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default QuickAccessButtons;
