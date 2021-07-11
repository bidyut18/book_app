import React from "react";
import { View, StyleSheet } from "react-native";

interface CenterProps {}
/**
 * Centers the Children
 */
const Center: React.FC<CenterProps> = ({ children }) => {
  return <View style={styles.main}>{children}</View>;
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Center };
