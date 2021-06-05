const { Colors } = require("react-native/Libraries/NewAppScreen");

import React from "react";
import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors, // whern ever we will import it somewhere else we wint need to import colors
  text: {
    color: colors.darkgray,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenri",
  },
};
