import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Layout from "./Layout";
import { Row } from "./header/Header.style";

const TabsTop: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Layout>
      <Row>
        <Row style={{ flex: 4 }}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const bg = (focus: boolean) => {
              if (focus) {
                return "#001cad";
              } else {
                return "transparent";
              }
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{
                  flex: 1,
                  padding: 10,
                  margin: 10,
                  borderRadius: 25,
                  marginRight: 10,
                  backgroundColor: bg(isFocused),
                }}
              >
                <Text
                  style={{
                    color: isFocused ? "white" : "#222",
                    textAlign: "center",
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Row>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M12 20V10M18 20V4M6 20v-4" />
          </Svg>
        </View>
      </Row>
    </Layout>
  );
};

export default TabsTop;
