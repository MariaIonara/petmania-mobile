import { router } from 'expo-router';
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.centro}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                <Text style={styles.texto}>PET SHOP</Text>
                <View style={styles.containerButton}>
                    <Button
                        title="INICIAR"
                        color='#3C2A02'
                        onPress={() => router.push('/telaLogin')}
                    />
                </View>
                <View style={styles.cachorrinho}>
                    <Image source={require('../assets/images/cachorrinho.png')}/>
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
        width: 300,
        height: 250,
    },

    centro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },

    texto: {
        padding: 80,
        color: '#ffffffff',
    },

    containerButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3C2A02',
        width: 150,
        height: 80,
        borderRadius: 0,

    },
    
    cachorrinho: {
        width: 40,
    }
})