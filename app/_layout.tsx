import { Stack } from "expo-router";
import { Image } from "react-native";

function LogoTitle() {
    return (
      <Image source={require('../assets/images/topo.png')} />
    );
  }

export default function RootLayout() {

  return (
      <Stack
        screenOptions={{
          headerBackImageSource: require('../assets/images/topo.png'),
          //headerBackTitleVisible: false,
        }}

      >
          
      </Stack>
  );
}
