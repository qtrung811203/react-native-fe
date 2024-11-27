import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/MainScreen";
import YogaClassDetail from "./src/screens/YogaClassDetailScreen";

const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#edefe9",
            },
            headerTintColor: "#5A8F7B",
            headerTitleStyle: {
              fontWeight: "medium",
            },
          }}
        >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <HomeStack.Screen
            name="YogaClassDetail"
            component={YogaClassDetail}
            options={{ title: "Yoga Detail" }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
