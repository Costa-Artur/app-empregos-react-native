import Header from "@/components/Header";
import { View, Text, StyleSheet } from "react-native";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>To be implemented</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});