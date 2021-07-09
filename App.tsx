import React from "react";
import { MainContainer, MainContent, FixedRight, Scroll } from "./App.style";
import Header from "./components/header/Header";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabsTop from "./components/TabsTop";

import Vault from "./components/vault/Vault";
import Cards from "./components/card/Cards";
import Accounts from "./components/account/Accounts";
import QuickAccessButtons from "./components/QuickAccessButton";

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <MainContainer>
      <Header />
      <MainContent>
        <FixedRight></FixedRight>
        <Scroll>
          <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
              tabBar={(props: MaterialTopTabBarProps) => <TabsTop {...props} />}
            >
              <Tab.Screen name="Accounts" component={Accounts} />
              <Tab.Screen name="Cards" component={Cards} />
              <Tab.Screen name="Vault" component={Vault} />
            </Tab.Navigator>
          </NavigationContainer>
        </Scroll>
      </MainContent>
      <QuickAccessButtons />
    </MainContainer>
  );
}
