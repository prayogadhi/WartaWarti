import { View } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryPanel from "./CategoryPanel";
import NewsListsPanel from "./NewsListsPanel";

const CategoryScreen = ({ navigation }) => {
  let [SelectedCategory, setSelectedCategory] = useState("Finance");

  useEffect(() => {}, [SelectedCategory]);

  return (
    <View>
      <CategoryPanel setSelectedCategory={setSelectedCategory}></CategoryPanel>
      <NewsListsPanel
        navigation={navigation}
        SelectedCategory={SelectedCategory}
      />
    </View>
  );
};

export default CategoryScreen;
