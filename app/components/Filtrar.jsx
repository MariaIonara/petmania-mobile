import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

/*
export default function Filtrar({data}) {
    const [busca, setBusca] = useState('')
    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
     //const results = data.filter(item => 
      //  item.nome(busca)
        
      //);
      //setFilteredPets(results);
      alert(data[0].nome)
    }, [busca]);


    return (
      <View
        style={styles.container}
      >
        <TextInput style={styles.inputs} value={busca} onChangeText={setBusca} />
        <FlatList
          data={filteredPets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Text>{}</Text>}
          ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          style={{ width: "100%" }}
        />
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

})*/


export default function Filtar({ data }) {
    return (
        <View>
            {
                (data!==undefined) ? 
                    <View>
                        {
                            data.map((a, i) => {
                                return <Text key={`Teste-${i}`}>{a.nome}</Text>
                            })
                        }
                    </View>
                 : <View> 
                    <Text>Carregando</Text>    
                    
                </View>
            }
        </View>
    )
}