import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
  TopRegion,
  Row,
  Column,
  TextBold,
  TextNormal,
  TextSmall,
} from "./Header.style";
import { Image, StyleSheet } from "react-native";
import Layout from "../Layout";

const Header: React.FC = () => {
  return (
    <TopRegion>
      <Layout>
        <Row>
          <Column>
            <TextNormal>Hi, Samuel</TextNormal>
            <TextSmall>Welcome back</TextSmall>
          </Column>
          <Row>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255, 0.8)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 10 }}
            >
              <Path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </Svg>
            <Image
              source={{
                uri: "https://res.cloudinary.com/cortehz/image/upload/v1623664852/IMG_7422_ij5qgj.jpg",
              }}
              style={styles.image}
            />
          </Row>
        </Row>
        <Row>
          <Column>
            <TextNormal>USD Account</TextNormal>
            <TextSmall>Cash Available</TextSmall>
          </Column>

          <Row>
            <TextBold>$145.00</TextBold>
            <Svg
              style={{ marginLeft: 10 }}
              width="16"
              height="16"
              fill="#364ec5"
              viewBox="0 0 16 16"
            >
              <Path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" />
            </Svg>
          </Row>
        </Row>
      </Layout>
    </TopRegion>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});
