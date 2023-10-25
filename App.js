import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./components/screens/HomeScreen";
import NewsDetails from "./components/screens/NewsDetails";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News">
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{
                  headerTitle: "Home",
                  headerStyle: { backgroundColor: "#fff" },
                }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="News Details"
                options={{
                  headerTitle: "News Details",
                  headerStyle: { backgroundColor: "#fff" },
                }}
                component={NewsDetails}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
