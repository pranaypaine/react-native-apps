import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Demo App</Text>
      </View>
      <Text
        style={styles.textStyle}
      >
        Hello
      </Text>
      <Button title="tap me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle : { 
    margin: 16,
    borderWidth: 2,
    borderColor: "green",
    padding: 16
  },
});
