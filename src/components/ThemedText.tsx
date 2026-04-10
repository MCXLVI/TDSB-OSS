import { StyleSheet, Text, type TextProps } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "link";
};

export function ThemedText({ style, type = "default", ...otherProps }: ThemedTextProps) {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        { color: colors.text },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "link" && styles.link,
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  title: {
    fontSize: 48,
    lineHeight: 52,
    fontWeight: 600,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: "#3c87f7",
  },
});
