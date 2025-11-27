import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';

export default function Page() {

const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '928270835007-1d2evr5ghjvtfdnbatejrm7q37968fem.apps.googleusercontent.com', // ID Cliente OAuth do console do Google Cloud
        webClientId: '928270835007-1d2evr5ghjvtfdnbatejrm7q37968fem.apps.googleusercontent.com',
    });

    async function loginEmailSenha() {
    if (!email || !senha) {
      return Alert.alert("Erro", "Preencha email e senha.");
    }

    console.log("Acabei de fazer login com o email e senha!")
    setLoading(true);

    try {
      //fazer chamada da api aqui para fazer login
      const resp = await fetch("https://00fvcqqh-3000.brs.devtunnels.ms/api/auth/[...nextauth]", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resp.json();

      if (!resp.ok) {
        setLoading(false);
        return Alert.alert("Erro", dados.mensagem);
      }

      await AsyncStorage.setItem("@user", JSON.stringify(dados.usuario));
      setLoading(false);

      navigation.replace("questions");

    } catch (error) {
      setLoading(false);
      Alert.alert("Erro", "Falha ao conectar ao servidor.");
    }
  }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.centro}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                <Text style={styles.texto}>LOGIN</Text>
                <View>
                    <TextInput placeholder=' EMAIL' placeholderTextColor="#000000ff" style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail}/>
                    <TextInput placeholder=' SENHA' placeholderTextColor="#000000ff" style={styles.input} secureTextEntry value={senha} onChangeText={setSenha}/>
                    <Link href={"/"}>
                        <Text>Esqueceu a senha?</Text>
                    </Link>
                </View>
                <View style={styles.containerButton}>
                    {/*<Button
                        title="LOGIN"
                        color='#3C2A02'
                        onPress={() => router.push('/')}
                    />*/}
                    <TouchableOpacity
                        style={[styles.button, styles.emailButton]}
                        onPress={loginEmailSenha}
                    >
                        <Text style={styles.buttonText}>
                        {loading ? "Entrando..." : "Login com Email"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cachorrinho}>
                    <Image source={require('../assets/images/cachorro.png')}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#357DB7',
    },

    logo: {
        width: 200,
        height: 180,
    },

    centro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },

    texto: {
        padding: 50,
        color: '#ffffffff',
    },

    containerButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3C2A02',
        width: 163,
        height: 41,
        borderRadius: 100,

    },
    
    cachorrinho: {
        marginTop: 120,
        width: 40,
    },

    input: {
        width: 278,
        height: 44,
        margin: 12,
        backgroundColor: '#ffffffff',
        borderRadius: 20,
    },
})