import "../global.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HeroUINativeProvider } from "heroui-native/provider";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={false}>
            <Stack.Screen name="(app)" />
          </Stack.Protected>
          <Stack.Protected guard={true}>
            <Stack.Screen name="(auth)" />
          </Stack.Protected>
        </Stack>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
