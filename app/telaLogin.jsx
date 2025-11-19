import { Link, router } from 'expo-router';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../firebaseConfig';

export default function Page() {

const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '928270835007-1d2evr5ghjvtfdnbatejrm7q37968fem.apps.googleusercontent.com', // ID Cliente OAuth do console do Google Cloud
        webClientId: '928270835007-1d2evr5ghjvtfdnbatejrm7q37968fem.apps.googleusercontent.com',
    });


    return (
        <ScrollView style={styles.container}>
            <View style={styles.centro}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                <Text style={styles.texto}>LOGIN</Text>
                <View>
                    <TextInput placeholder=' EMAIL' placeholderTextColor="#000000ff" style={styles.input}/>
                    <TextInput placeholder=' SENHA' placeholderTextColor="#000000ff" style={styles.input}/>
                    <Link href={"/"}>
                        <Text>Esqueceu a senha?</Text>
                    </Link>
                </View>
                <View style={styles.containerButton}>
                    <Button
                        title="LOGIN"
                        color='#3C2A02'
                        onPress={() => router.push('/')}
                    />
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