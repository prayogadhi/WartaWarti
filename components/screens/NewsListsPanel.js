import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import VerticalCards from "../shared/VerticalCards";
import axios from "axios";

const NewsListsPanel = ({ SelectedCategory, navigation }) => {
  const FINANCEURL =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=273a43eb0db549c490623498891e6971";
  const POLITICURL =
    "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=273a43eb0db549c490623498891e6971";

  const [SelectedNews, setSelectedNews] = useState([]);

  const fetchFinanceNews = async () => {
    const result = await axios.get(FINANCEURL);
    setSelectedNews(result.data);
  };

  const fetchPoliticNews = async () => {
    axios.get(POLITICURL).then((result) => {
      setSelectedNews(result.data);
    });
  };

  const makeRandomId = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  useEffect(() => {
    if (SelectedCategory === "Finance") {
      fetchFinanceNews();
    }
    if (SelectedCategory === "Politics") {
      fetchPoliticNews();
    }
  }, [SelectedCategory]);

  return (
    <View>
      {SelectedNews.articles ? (
        SelectedNews.articles.map((article) => {
          const a = article.publishedAt;
          const b = makeRandomId(10);
          const id = a + b;
          return (
            <View key={id}>
              <TouchableOpacity
                onPress={() => navigation.navigate("News Details", article)}
              >
                <VerticalCards
                  title={article.title}
                  image={article.urlToImage}
                />
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <Text>Please wait for content</Text>
      )}
    </View>
  );
};

export default NewsListsPanel;
