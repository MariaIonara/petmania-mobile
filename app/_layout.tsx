import { Stack } from "expo-router";


/*function LogoTitle() {
    return (
      <Image source={require('../assets/images/topo.png')} />
    );
  }*/

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="telaInicial" options={{presentation: 'fullScreenModal', title: 'Inicial'}} />
      <Stack.Screen name="index" options={{presentation: 'fullScreenModal', title: 'Index'}} />
      <Stack.Screen name="telaLogin" options={{presentation: 'fullScreenModal', title: 'Login'}} />
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
