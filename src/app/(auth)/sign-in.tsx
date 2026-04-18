import { Image } from "expo-image";
import { useState } from "react";
import { View } from "react-native";

import { withUniwind } from "uniwind";

import { Button } from "heroui-native/button";
import { Card } from "heroui-native/card";
import { Input } from "heroui-native/input";
import { Label } from "heroui-native/label";
import { TextField } from "heroui-native/text-field";

const StyledImage = withUniwind(Image);

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};

  return (
    <View className="flex-1 items-center justify-center">
      <Card className="max-w-xs w-full gap-4 p-8">
        <Card.Header className="w-full h-20">
          <StyledImage
            source={require("../../../assets/images/TDSB-logo-light.png")}
            className="w-full h-full"
            contentFit="contain"
          />
        </Card.Header>
        <Card.Body className="gap-2">
          <TextField>
            <Label isRequired>Username</Label>
            <Input placeholder="Enter your username" />
          </TextField>
          <TextField>
            <Label isRequired>Password</Label>
            <Input placeholder="Enter your password" secureTextEntry />
          </TextField>
        </Card.Body>
        <Card.Footer>
          <Button onPress={handleSignIn}>Sign In</Button>
        </Card.Footer>
      </Card>
    </View>
  );
}
