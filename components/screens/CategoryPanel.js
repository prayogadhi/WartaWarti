import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const CategoryPanel = (props) => {
  return (
    <View className="py-3">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <TouchableOpacity onPress={() => props.setSelectedCategory("Finance")}>
          <Button mode="contained">Finance</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.setSelectedCategory("Politics")}>
          <Button mode="contained">Politics</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.setSelectedCategory("Sports")}>
          <Button mode="contained">Sports</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.setSelectedCategory("Travels")}>
          <Button mode="contained">Travels</Button>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CategoryPanel;
