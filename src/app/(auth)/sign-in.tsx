import { useState } from "react";
import { Text, View } from "react-native";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};

  return (
    <View className="flex-1 items-center justify-center bg-background text-foreground">
      <Text>Sign In</Text>
    </View>
  );
}
