import React from "react";
import { Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Center } from "../../components/position";
import { Button } from "react-native-paper";
import { mainRoutes } from "../../types/route";

const logIn: React.FC<StackScreenProps<mainRoutes>> = ({ navigation }) => {
  return (
    <Center>
      <Text>Log In screen</Text>
      <Button
        theme={{ roundness: 8 }}
        style={{ margin: 10 }}
        mode="outlined"
        onPress={() => navigation.navigate("signUp")}
      >
        Sign Up
      </Button>
    </Center>
  );
};

export { logIn };
