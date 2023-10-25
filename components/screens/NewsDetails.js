import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.height * 9) / 16);
let imageWidth = dimensions.width;

const NewsDetails = ({ route }) => {
  const { title, author, urlToImage, content, url } = route.params;

  return (
    <View>
      <ScrollView>
        <Text className="text-3xl underline font-bold px-2 pt-2">{title}</Text>
        <Text className="py-2 pl-2 text-sm">{author}</Text>
        {urlToImage ? (
          <Image style={styles.image} source={{ uri: urlToImage }}></Image>
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg",
            }}
          />
        )}
        <Text className="text-base px-2 py-2">{content}</Text>
        <Text
          style={{ color: "blue" }}
          className="text-sm underline px-2 py-2"
          onPress={() => Linking.openURL(url)}
        >
          Read more
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
  },
});
