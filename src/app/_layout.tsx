import {DarkTheme, DefaultTheme, ThemeProvider} from "expo-router";
import {useColorScheme} from "react-native";
import WelcomeScreen from ".";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <WelcomeScreen />
    </ThemeProvider>
  );
}
