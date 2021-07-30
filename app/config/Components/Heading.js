import React from "react";
import { Text } from "react-native";
function Heading({ children }) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "serif",
      }}
    >
      {children}
    </Text>
  );
}

export default Heading;
