import { View, type ViewProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const { colors } = useTheme();

  return <View style={[{ backgroundColor: colors.background }, style]} {...otherProps} />;
}
