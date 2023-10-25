import * as React from "react";
import { Card, Text } from "react-native-paper";
import { View } from "react-native";

const Cards = (props) => {
  return (
    <View>
      <Card className="mb-4">
        {props.image ? (
          <Card.Cover
            source={{
              uri: props.image,
            }}
          />
        ) : (
          <Card.Cover
            source={{
              uri: "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg",
            }}
          />
        )}
        <Card.Content className="mt-4">
          <Text className="h-28" variant="titleLarge">
            {props.title}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Cards;
