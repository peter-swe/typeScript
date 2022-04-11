import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import Navigation from "./navigation/indeex";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
