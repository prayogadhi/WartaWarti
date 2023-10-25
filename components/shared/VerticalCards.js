import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

const VerticalCards = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.leftColumn}>
            <Text>{props.title}</Text>
          </View>
          <View className="px-2 py-2" style={styles.rightColumn}>
            {props.image ? (
              <Image
                style={styles.image}
                source={{
                  uri: props.image,
                }}
              />
            ) : (
              <Image
                style={styles.image}
                source={{
                  uri: "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg",
                }}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerticalCards;

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 6,
    elevation: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#dfdfdf",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  leftColumn: {
    flex: 3,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  rightColumn: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
