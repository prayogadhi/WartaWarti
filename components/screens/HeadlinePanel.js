import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import Cards from "../shared/Cards";

const HeadlinePanel = () => {
  const [HeadlineNews, setHeadlineNews] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=273a43eb0db549c490623498891e6971"
    );
    setHeadlineNews(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView horizontal>
        {HeadlineNews.articles ? (
          HeadlineNews.articles.map((article) => {
            return (
              <View key={article.publishedAt}>
                <TouchableOpacity className="w-screen pr-2">
                  <Cards title={article.title} image={article.urlToImage} />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text>Please wait</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default HeadlinePanel;
