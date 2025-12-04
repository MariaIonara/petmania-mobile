import { Stack } from "expo-router";


/*function LogoTitle() {
    return (
      <Image source={require('../assets/images/topo.png')} />
    );
  }*/

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{presentation: 'fullScreenModal', title: 'Tela Inicial'}} />
      <Stack.Screen name="telaLogin" options={{presentation: 'fullScreenModal', title: 'Login'}} />
      <Stack.Screen name="telaPet" options={{presentation: 'fullScreenModal', title: 'Pets'}} />
    </Stack>

      /*<Stack
        screenOptions={{
          headerBackImageSource: require('../assets/images/topo.png'),
          //headerBackTitleVisible: false,
        }}

      >
      </Stack>*/
  );
}
