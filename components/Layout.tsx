import * as React from "react";
import { View, StyleSheet } from "react-native";

const Layout: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
    paddingLeft: 25,
  },
});
