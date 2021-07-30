import React, { useState } from "react";
import { FlatList, View } from "react-native";

import colors from "../config/colors";
import ListItem from "../config/Components/ListItem";
import ListItemSeperator from "../config/Components/ListItemSeperator";
import ScreenHeader from "../config/Components/ScreenHeader";
import ListItemDeleteAction from "../config/Components/ListItemDeleteAction";

console.log("working");

const listOfMessages = [
  {
    key: 1,
    title: "sana",
    description: "D1",
    image: require("../assets/logo-red.png"),
  },
  {
    key: 2,
    title: "john",
    description: "D2",
    image: require("../assets/logo-blue.png"),
  },
  {
    key: 3,
    title: "eric",
    description: "D2",
    image: require("../assets/logo-blue.png"),
  },
  {
    key: 4,
    title: "silver",
    description: "D1",
    image: require("../assets/logo-red.png"),
  },
  {
    key: 5,
    title: " sarah",
    description: "D2",
    image: require("../assets/logo-blue.png"),
  },
  // {
  //   key: 6,
  //   title: "T3",
  //   description: "D2",
  //   image: require("../assets/logo-blue.png"),
  // },
  // {
  //   key: 7,
  //   title: "T1",
  //   description: "D1",
  //   image: require("../assets/logo-red.png"),
  // },
  // {
  //   key: 9,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/logo-blue.png"),
  // },
  // {
  //   key: 10,
  //   title: "T3",
  //   description: "D2",
  //   image: require("../assets/logo-blue.png"),
  // },
  // {
  //   key: 11,
  //   title: "T1",
  //   description: "D1",
  //   image: require("../assets/logo-red.png"),
  // },
  // {
  //   key: 12,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/logo-blue.png"),
  // },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(listOfMessages); //useState(initialStage)
  const [refresh, setRefresh, x] = useState(false);

  //const [x, setX] = useState(12);
  //setX(45);
  //console.log("hey");
  //console.log(x);

  const handleDelete = (message) => {
    //temprary solution :
    //const newMessages = messagesCount.filter(m=> m.id != message.id);
    //setMessages(newMessages);
    setMessages(messages.filter((m) => m.key != message.key));
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={messages} 
        //take an object or array of objects
        //if we are using key attribute in an object we dont need to define
        //the key as someother attribute e.g if id is an attritbute we can define that as key
        // keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            //onPress={() => console.log("clicked", item)}
            renderRightAction={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refresh} 
        //if we will initialize it with true it will keep on 
        //rotating that loading circle
        //here we will call backend to retrieve new array of messages
        onRefresh={() => {
          setMessages([
            {
              key: 11,
              title: "T1",
              description: "D1",
              image: require("../assets/logo-red.png"),
            },
            {
              key: 12,
              title: "T2",
              description: "D2",
              image: require("../assets/logo-blue.png"),
            },
          ]);
        }}
        // ListHeaderComponent={() => (
        //   <View
        //     styles={{
        //       width: "80%",
        //       height: 20,
        //       backgroundColor: colors.PrimaryO,
        //     }}
        ///>
        // )}
        //stickyHeaderIndices={[0]}
      />
    </View>
    // </View>
  );
}

export default MessagesScreen;
