import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { logIn } from "../src/screens/logIn";
import { signUp } from "../src/screens/signUp";
import { mainRoutes } from "../types/route";

const MainRoute = createStackNavigator<mainRoutes>();

interface MainRoutesProps {}
const MainRoutes: React.FC<MainRoutesProps> = () => {
  return (
    <NavigationContainer>
      <MainRoute.Navigator initialRouteName="logIn">
        <MainRoute.Screen
          name="logIn"
          component={logIn}
          options={{ headerTitle: "Log In", headerTitleAlign: "center" }}
        />
        <MainRoute.Screen
          name="signUp"
          getComponent={() => signUp}
          options={{ headerShown: false }}
        />
      </MainRoute.Navigator>
    </NavigationContainer>
  );
};

export { MainRoutes };
