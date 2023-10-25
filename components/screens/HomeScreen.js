import { ScrollView, Text, View } from "react-native";
import React from "react";
import HeadlinePanel from "./HeadlinePanel";
import CategoryScreen from "./CategoryScreen";

export default function HomeScreen({ navigation }) {
  return (
    <View className="mx-4 my-4">
      <ScrollView>
        <Text className="mb-2"> Headline News </Text>
        <HeadlinePanel navigation={navigation} />
        <CategoryScreen navigation={navigation} />
      </ScrollView>
    </View>
  );
}
