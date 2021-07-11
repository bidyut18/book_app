import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { Center } from "../../components/position";
import { mainRoutes } from "../../types/route";

const signUp: React.FC<StackScreenProps<mainRoutes>> = ({ navigation }) => {
  return (
    <Center>
      <Text>Sign Up screen</Text>
      <Button
        theme={{ roundness: 8 }}
        style={{ margin: 10 }}
        mode="outlined"
        onPress={() => navigation.navigate("logIn")}
      >
        Log in
      </Button>
    </Center>
  );
};

export { signUp };
