import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../colors";

function ListItem({
  title,
  description,
  image,
  onPress,
  IconComponent,
  renderRightAction,
}) {
  //IconComponent here is in parrallel casing bcz it is a whole component as a prop
  //thats why the naming convension is like this
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 15,
            paddingLeft: 10,
            backgroundColor: colors.white,
          }}
        >
          {IconComponent}
          {
            //conditional rendering
            //when we dont get the prop from user so we dont want to show that space thats why we
            // consume that space so that the component can be more resuable
            image && (
              <Image
                source={image}
                style={styles.profileImage}
                resizeMode={"contain"}
              />
            )
          }

          {/* <Image
            source={image}
            style={styles.profileImage}
            resizeMode={"contain"}
          /> */}

          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text>{title}</Text>
            {description && <Text>{description}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});

export default ListItem;
