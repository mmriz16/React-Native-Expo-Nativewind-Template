import { LogBox, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

LogBox.ignoreLogs([
  "SafeAreaView has been deprecated",
]);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Ini Recool UI!</Text>
    </SafeAreaView>
  );
}
