import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [pets, setPets] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch('https://00fvcqqh-3000.brs.devtunnels.ms/api/pets');
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error(error);
    }

  }

  const Item = ({ pet }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{pet.nomedopet}</Text>
    </View>
  );

  return (
    <View
      style={styles.container}
    >
      <TextInput style={styles.inputs} value={pesquisa} onChangeText={setPesquisa} />

      (pets.length) ?
        <FlatList
          data={pets}
          renderItem={({ item }) => <Item pet={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          style={{ width: "100%" }}
        />
      : <View>
        <Text>Carregando</Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#357DB7",
  },

  item: {
    padding: 20,
    backgroundColor: "#422A13",
  },

  texto: {
    color: '#E2DFDD',
  },

  inputs: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    width: 200,
    paddingHorizontal: 10
  }

})