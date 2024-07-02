import { Stack } from "expo-router";
import MainPage from "./(tabs)/mainPage";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} ></Stack.Screen>
    </Stack>
  );
}
