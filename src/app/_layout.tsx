import "../global.css";

import { HeroUINativeProvider } from "heroui-native/provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Stack } from "expo-router";

import { useThemeColor } from "heroui-native/hooks";

export default function RootLayout() {
  const backgroundColor = useThemeColor("background");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <Stack
          screenOptions={{ headerShown: false, contentStyle: { backgroundColor: backgroundColor } }}
        >
          <Stack.Protected guard={false}>
            <Stack.Screen name="(app)" />
          </Stack.Protected>
          <Stack.Protected guard={true}>
            <Stack.Screen name="(auth)/sign-in" />
          </Stack.Protected>
        </Stack>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
